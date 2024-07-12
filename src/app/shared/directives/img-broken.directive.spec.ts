import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


//Componente de prueba 
@Component({
  template:'<img class="testing-directive" appImgBroken [src]="srcMock">'
})

class TestComponent {
  public srcMock: string | null = null;
}


describe('ImgBrokerDirective', () => {
   
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance


  })


  it('should create an instance', () => {
    const mockElement = new ElementRef(' ')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent deberia instanciarse correctamente',()=>{
    expect(component).toBeTruthy()
  })

  it('Directive should hcange the image for a base 64',()=>{
    //Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src
    component.srcMock = undefined

    setTimeout(()=>{
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = beforeImgElement.src

     expect(afterImgSrc).toEqual('')

    },3000)
  } )
});
