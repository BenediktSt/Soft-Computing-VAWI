import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaComponent } from './ea.component';

describe('EaComponent', () => {
  let component: EaComponent;
  let fixture: ComponentFixture<EaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
