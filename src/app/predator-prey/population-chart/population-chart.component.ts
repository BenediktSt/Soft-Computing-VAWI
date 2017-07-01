import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-population-chart',
  templateUrl: './population-chart.component.html',
  styleUrls: ['./population-chart.component.css']
})
export class PopulationChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public lineChartType = 'line';
  public lineChartData: Array<any> = [
    { data: [], label: 'Beute' },
    { data: [], label: 'Räuber' }
  ];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLabels: Array<any> = [];

  public lineChartColors: Array<any> = [
    { // beute
      backgroundColor: 'rgba(144,238,144,0.2)',
      borderColor: 'rgba(0,128,0,1)',
      pointBackgroundColor: 'rgba(0,128,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // räuber
      backgroundColor: 'rgba(240,128,128,0.2)',
      borderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: 'rgba(255,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  addDataSet(predatorCount: number, preyCount: number) {
    this.lineChartData[0].data.push(preyCount);
    this.lineChartData[1].data.push(predatorCount);
    this.lineChartLabels.push(this.lineChartLabels.length + 1);

    this.chart.chart.config.data.labels = this.lineChartLabels;
    this.chart.chart.config.data.data = this.lineChartData;

    this.chart.chart.update();
  }

  reset(){
    this.lineChartLabels = [];
    this.lineChartData[0].data = [];
    this.lineChartData[1].data = [];
  }

}
