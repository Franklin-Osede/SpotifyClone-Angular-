import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Add this import
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule // Add this import
      ],
      declarations: [LoginPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('🛑 it should return invalid forms', () => {

    //ARRANGE 
    const mockCredentials = {
      email: '0x0x0x0x0x0x0x',
      password: '1111111111111111111111111'
    }

    const emailForm : any= component.formLogin.get('email')
    const passwordForm:any = component.formLogin.get('password')

    //ACT 

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //ASSERT 


    expect(component.formLogin.invalid).toEqual(true);
  });

  it('✅✅ it should return a valid forms', () => {

    //ARRANGE 
    const mockCredentials = {
      email: 'test@test.com',
      password: '112345678'
    }

    const emailForm : any= component.formLogin.get('email')
    const passwordForm:any = component.formLogin.get('password')

    //ACT 

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //ASSERT 


    expect(component.formLogin.invalid).toEqual(false);
  });

  it('👍 El boton debería de tener la palabra de "Iniciar session"', ()=>{

    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')

  })
});
