import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Logic } from 'es6-fuzz';

@Component({
  selector: 'app-fuzzy-chart',
  templateUrl: './fuzzy-chart.component.html',
  styleUrls: ['./fuzzy-chart.component.css']
})
export class FuzzyChartComponent implements OnInit {

  @Input() demandData: Logic;
  @Input() stockData: Logic;

  public allChartType = 'line';
  public allChartLabels: Array<any> = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  public allChartOptions: any = {
    responsive: true,
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    }
  };


  public demandChartData: Array<any> = [];

  public stockChartData: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.calculateData();
  }

  calculateData() {
    let labelData = this.demandData.defuzzify(0);
    this.demandChartData = [
      { data: [], label: labelData.rules[0].output },
      { data: [], label: labelData.rules[1].output },
      { data: [], label: labelData.rules[2].output }
    ];
    labelData = this.stockData.defuzzify(0);
    this.stockChartData = [
      { data: [], label: labelData.rules[0].output },
      { data: [], label: labelData.rules[1].output },
      { data: [], label: labelData.rules[2].output }
    ];

    this.allChartLabels.forEach((element) => {
      let res = this.demandData.defuzzify(element);
      this.demandChartData[0].data.push(res.rules[0].fuzzy);
      this.demandChartData[1].data.push(res.rules[1].fuzzy);
      this.demandChartData[2].data.push(res.rules[2].fuzzy);

      res = this.stockData.defuzzify(element);
      this.stockChartData[0].data.push(res.rules[0].fuzzy);
      this.stockChartData[1].data.push(res.rules[1].fuzzy);
      this.stockChartData[2].data.push(res.rules[2].fuzzy);
    })
  }

}
