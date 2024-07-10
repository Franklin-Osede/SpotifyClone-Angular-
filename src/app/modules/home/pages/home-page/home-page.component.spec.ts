import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component'; // Correctly import the SideBarComponent
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component'; // Correctly import the MediaPlayerComponent
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomePageComponent,
    SideBarComponent, // Declare SideBarComponent
    MediaPlayerComponent // Declare MediaPlayerComponent
  ],
  exports: [
    HomePageComponent,
    SideBarComponent, // Export SideBarComponent
    MediaPlayerComponent // Export MediaPlayerComponent
  ],
  imports: [CommonModule] // Import CommonModule for Angular directives
})
class TestModule {} // End of Test Module

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule] // Use the Test Module here
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
