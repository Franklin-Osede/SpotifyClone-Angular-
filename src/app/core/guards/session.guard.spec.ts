import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing'

import { SessionGuard } from './session.guard';

describe('Testing of Session Guard', () => {
  let guard: SessionGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ]
    });
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
