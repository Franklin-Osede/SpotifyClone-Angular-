import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TracksPageComponent } from './tracks-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component'; // Add this import

describe('TracksPageComponent', () => {
  let component: TracksPageComponent;
  let fixture: ComponentFixture<TracksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        TracksPageComponent,
        SectionGenericComponent // Declare SectionGenericComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
