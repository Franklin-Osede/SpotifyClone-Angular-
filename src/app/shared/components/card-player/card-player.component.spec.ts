import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPlayerComponent } from './card-player.component';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CardPlayerComponent,
    ImgBrokenDirective // Declare the directive
  ],
  exports: [
    CardPlayerComponent,
    ImgBrokenDirective // Export the directive
  ],
  imports: [CommonModule] // Import CommonModule for Angular directives
})
class TestModule {} // End of Test Module

describe('CardPlayerComponent', () => {
  let component: CardPlayerComponent;
  let fixture: ComponentFixture<CardPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule] // Use the Test Module here
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
