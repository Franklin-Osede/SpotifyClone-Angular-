import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';

import { SessionGuard } from './session.guard';

describe('Testing of Session Guard', () => {
  let guard: SessionGuard;
  let cookieService: CookieService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        SessionGuard,
        { provide: CookieService, useValue: jasmine.createSpyObj('CookieService', ['check']) }
      ]
    });

    guard = TestBed.inject(SessionGuard);
    cookieService = TestBed.inject(CookieService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if the token cookie is present', () => {
    (cookieService.check as jasmine.Spy).and.returnValue(true);
    expect(guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toBe(true);
  });

  it('should navigate to /auth and return false if the token cookie is not present', () => {
    const navigateSpy = spyOn(router, 'navigate');
    (cookieService.check as jasmine.Spy).and.returnValue(false);
    expect(guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/','auth']);
  });
});
