import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyChartComponent } from './fuzzy-chart.component';

describe('FuzzyChartComponent', () => {
  let component: FuzzyChartComponent;
  let fixture: ComponentFixture<FuzzyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuzzyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzzyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
