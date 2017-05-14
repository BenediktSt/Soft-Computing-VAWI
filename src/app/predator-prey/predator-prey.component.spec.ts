import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredatorPreyComponent } from './predator-prey.component';

describe('PredatorPreyComponent', () => {
  let component: PredatorPreyComponent;
  let fixture: ComponentFixture<PredatorPreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredatorPreyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredatorPreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
