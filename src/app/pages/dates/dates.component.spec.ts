import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesComponent } from './dates.component';

describe('DatesComponent', () => {
  let component: DatesComponent;
  let fixture: ComponentFixture<DatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DatesComponent]
    });
    fixture = TestBed.createComponent(DatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
