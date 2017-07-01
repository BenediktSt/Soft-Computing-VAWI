import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Cell } from './utils/cell';
import { Map } from './utils/map';
import { Ruleset } from './utils/rules';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { PopulationChartComponent } from './population-chart/population-chart.component';

@Component({
  selector: 'app-predator-prey',
  templateUrl: './predator-prey.component.html',
  styleUrls: ['./predator-prey.component.css']
})
export class PredatorPreyComponent implements OnInit {

  @ViewChild(PopulationChartComponent)
  private chartComp: PopulationChartComponent;

  public size: number;
  public map: Map;

  public populationLevel: number;
  public startLevelPredator: number;
  public energyThroughEating: number;
  public ruleSet: Ruleset;

  public currentCell: Cell;

  public newMapForm: FormGroup;
  public showNewMapForm: boolean;

  constructor(private fb: FormBuilder, public snackBar: MdSnackBar) {
    this.populationLevel = 8;
    this.startLevelPredator = 8;
    this.energyThroughEating = 5;
    this.ruleSet = new Ruleset(this.populationLevel, this.energyThroughEating);

    this.size = 12;
    this.map = new Map(this.size, this.ruleSet, this.startLevelPredator);

    this.ruleSet.setMap(this.map);

    this.newMapForm = this.fb.group({
      size: ['', Validators.required ],
      populationLevel: ['', Validators.required ],
      startLevelPredator: ['', Validators.required ],
      energyThroughEating: ['', Validators.required ]
    });
    this.showNewMapForm = false;
  }

  ngOnInit() {
  }

  iterate() {
    this.map.iterate();
    this.chartComp.addDataSet(
      this.map.getCount('predator'),
      this.map.getCount('prey'));
  }

  reset() {
    this.map = new Map(this.size, this.ruleSet, this.startLevelPredator);
    this.chartComp.reset();
  }

  generateNewMap() {
    if (this.newMapForm.status === 'VALID') {
      this.populationLevel = this.newMapForm.get('populationLevel').value;
      this.startLevelPredator = this.newMapForm.get('startLevelPredator').value;
      this.energyThroughEating = this.newMapForm.get('energyThroughEating').value;
      this.ruleSet = new Ruleset(this.populationLevel, this.energyThroughEating);

      this.size = this.newMapForm.get('size').value;
      this.map = new Map(this.size, this.ruleSet, this.startLevelPredator);

      this.ruleSet.setMap(this.map);
      this.newMapForm.reset();
      this.showNewMapForm = false;
      this.chartComp.reset();
    }else {
      this.snackBar.open('Bitte alle Felder befüllen.', 'OK', {
      duration: 2000,
    });
    }
  }

  addDataSet() {
    this.chartComp.addDataSet(
      this.map.getCount('predator'),
      this.map.getCount('prey'));
  }
}
