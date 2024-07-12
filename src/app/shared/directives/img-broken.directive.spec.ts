import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Componente de prueba
@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srcMock">'
})
class TestComponent {
  public srcMock: string | null = null; // Ensure type is string | null
}

describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const mockElement = new ElementRef(' ');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent should be instantiated correctly', () => {
    expect(component).toBeTruthy();
  });

  it('Directive should change the image src to a base 64', (done) => {
    // Arrange
    const imgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
    const beforeImgSrc = imgElement.src;
    component.srcMock = 'invalid-url'; // Set an invalid URL to trigger the error
    fixture.detectChanges(); // Update the binding

    // Act
    imgElement.dispatchEvent(new Event('error')); // Simulate the error event
    fixture.detectChanges(); // Update the binding

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
      const afterImgSrc = afterImgElement.src;

      // Assert
      expect(afterImgSrc).toContain('data:image'); // Check if the src contains the base64 data
      done();
    }, 0);
  });
});
