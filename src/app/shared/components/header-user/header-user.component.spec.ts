import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderUserComponent } from './header-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderUserComponent], // Declare HeaderUserComponent
  exports: [HeaderUserComponent], // Export HeaderUserComponent
  imports: [CommonModule] // Import CommonModule for Angular directives
})
class TestModule {} // End of Test Module

describe('HeaderUserComponent', () => {
  let component: HeaderUserComponent;
  let fixture: ComponentFixture<HeaderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule] // Use the Test Module here
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
