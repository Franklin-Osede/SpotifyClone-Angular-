import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionGenericComponent } from './section-generic.component'; // Correct import
import { NgModule } from '@angular/core';

// Create a Test Module
@NgModule({
  declarations: [SectionGenericComponent], // Declare SectionGenericComponent
  exports: [SectionGenericComponent] // Export SectionGenericComponent
})
class TestModule {} // End of Test Module

describe('SectionGenericComponent', () => {
  let component: SectionGenericComponent;
  let fixture: ComponentFixture<SectionGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule] // Use the Test Module here
    }).compileComponents();

    fixture = TestBed.createComponent(SectionGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
