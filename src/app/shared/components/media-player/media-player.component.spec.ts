import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaPlayerComponent } from './media-player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import

// Create a Test Module
@NgModule({
  declarations: [MediaPlayerComponent], // Declare MediaPlayerComponent
  imports: [CommonModule], // Import CommonModule here
  exports: [MediaPlayerComponent] // Export MediaPlayerComponent
})
class TestModule {} // End of Test Module

describe('MediaPlayerComponent', () => {
  let component: MediaPlayerComponent;
  let fixture: ComponentFixture<MediaPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule] // Use the Test Module here
    }).compileComponents();

    fixture = TestBed.createComponent(MediaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
