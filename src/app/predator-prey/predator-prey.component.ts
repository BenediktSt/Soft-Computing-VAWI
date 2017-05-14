import { Component, OnInit } from '@angular/core';
import { Cell } from './utils/cell';
import { Map } from './utils/map';

@Component({
  selector: 'app-predator-prey',
  templateUrl: './predator-prey.component.html',
  styleUrls: ['./predator-prey.component.css']
})
export class PredatorPreyComponent implements OnInit {

  public map: Map;

  public size: number;

  public currentCell: Cell;

  constructor() {
    this.size = 8;
    this.map = new Map(this.size);
  }
 // [ngClass]="{'prey': currentCell.value === 1}"
  ngOnInit() {
  }

}
