import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllscoresComponent } from './allscores.component';

describe('AllscoresComponent', () => {
  let component: AllscoresComponent;
  let fixture: ComponentFixture<AllscoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllscoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
