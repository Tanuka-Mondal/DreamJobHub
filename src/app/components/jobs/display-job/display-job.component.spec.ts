import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayJobComponent } from './display-job.component';

describe('DisplayJobComponent', () => {
  let component: DisplayJobComponent;
  let fixture: ComponentFixture<DisplayJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayJobComponent]
    });
    fixture = TestBed.createComponent(DisplayJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
