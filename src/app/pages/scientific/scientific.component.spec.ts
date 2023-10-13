import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificComponent } from './scientific.component';

describe('ScientificComponent', () => {
  let component: ScientificComponent;
  let fixture: ComponentFixture<ScientificComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScientificComponent]
    });
    fixture = TestBed.createComponent(ScientificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
