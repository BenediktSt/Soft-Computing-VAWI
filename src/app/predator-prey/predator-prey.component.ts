import { Component, OnInit } from '@angular/core';
import { Cell } from './utils/cell';
import { Map } from './utils/map';
import { Ruleset } from './utils/rules';

@Component({
  selector: 'app-predator-prey',
  templateUrl: './predator-prey.component.html',
  styleUrls: ['./predator-prey.component.css']
})
export class PredatorPreyComponent implements OnInit {

  public size: number;
  public map: Map;

  public populationLevel: number;
  public ruleSet: Ruleset;

  public currentCell: Cell;

  constructor() {
    this.populationLevel = 8;
    this.ruleSet = new Ruleset(this.populationLevel);

    this.size = 12;
    this.map = new Map(this.size, this.ruleSet);

    this.ruleSet.setMap(this.map);

  }

  ngOnInit() {
  }

  calculate() {
    this.map.calculateMovement();
  }

  iterate() {
    this.map.iterate();
  }

  reset() {
    // TODO: Anpassung der Größe Funktioniert nicht
    this.map = new Map(this.size, this.ruleSet);
  }

}
