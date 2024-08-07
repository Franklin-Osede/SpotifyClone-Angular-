import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayListBodyComponent } from './play-list-body.component';
import { OrderListPipe } from '../../pipe/order-list.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@NgModule({
  declarations: [PlayListBodyComponent, OrderListPipe],
  exports: [PlayListBodyComponent],
  imports: [CommonModule] // Add CommonModule here
})
class TestModule {}

describe('PlayListBodyComponent', () => {
  let component: PlayListBodyComponent;
  let fixture: ComponentFixture<PlayListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
