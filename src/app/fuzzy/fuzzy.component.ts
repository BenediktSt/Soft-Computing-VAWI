import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Logic } from 'es6-fuzz';
import { Triangle } from 'es6-fuzz/lib/curve/triangle';
import { Trapezoid } from 'es6-fuzz/lib/curve/trapezoid';

@Component({
  selector: 'app-fuzzy',
  templateUrl: './fuzzy.component.html',
  styleUrls: ['./fuzzy.component.css']
})
export class FuzzyComponent implements OnInit {

  public purchaseForm: FormGroup;
  public logicDemand = new Logic();
  public logicStock = new Logic();
  public showFuzzy: boolean;

  public fuzzyDataDemand: Array<any>;
  public fuzzyDataStock: Array<any>;

  constructor(private fb: FormBuilder) {
    this.purchaseForm = this.fb.group({
      demandProdA: ['', Validators.required ],
      demandProdB: ['', Validators.required ],
      demandProdC: ['', Validators.required ],
      demandProdD: ['', Validators.required ],
      stockProdA: ['', Validators.required ],
      stockProdB: ['', Validators.required ],
      stockProdC: ['', Validators.required ],
      stockProdD: ['', Validators.required ],
    });

    this.fuzzyDataDemand = [];
    this.fuzzyDataDemand.push({name: 'low', points: [-1, 0, 10, 15]});
    this.fuzzyDataDemand.push({name: 'middle', points: [10, 25, 35]});
    this.fuzzyDataDemand.push({name: 'high', points: [30, 40, 50, 51]});

    this.fuzzyDataStock = [];
    this.fuzzyDataStock.push({name: 'low', points: [-1, 0, 10, 15]});
    this.fuzzyDataStock.push({name: 'middle', points: [10, 25, 35]});
    this.fuzzyDataStock.push({name: 'high', points: [30, 40, 50, 51]});

    this.initializeFuzzyLogic();

    this.showFuzzy = false;

  }

  ngOnInit() {
  }

  calculate() {
    console.log(this.purchaseForm.get('demandProdA').value);
    console.log(this.logicDemand.defuzzify(this.purchaseForm.get('demandProdA').value));
    this.getHighestSet(this.logicDemand.defuzzify(this.purchaseForm.get('demandProdA').value));
  }

  getHighestSet(res: any) {
    res.rules.forEach(element => {
      console.log(element.output + ': ' + element.fuzzy);
    });
  }

  initializeFuzzyLogic(){
    this.logicDemand
      .init(this.fuzzyDataDemand[0].name, new Trapezoid(
        this.fuzzyDataDemand[0].points[0],
        this.fuzzyDataDemand[0].points[1],
        this.fuzzyDataDemand[0].points[2],
        this.fuzzyDataDemand[0].points[3]
        ))
      .and(this.fuzzyDataDemand[1].name, new Triangle(
        this.fuzzyDataDemand[1].points[0],
        this.fuzzyDataDemand[1].points[1],
        this.fuzzyDataDemand[1].points[2]
      ))
      .and(this.fuzzyDataDemand[2].name, new Trapezoid(
        this.fuzzyDataDemand[2].points[0],
        this.fuzzyDataDemand[2].points[1],
        this.fuzzyDataDemand[2].points[2],
        this.fuzzyDataDemand[2].points[3]
      ));

    this.logicStock
      .init(this.fuzzyDataStock[0].name, new Trapezoid(
        this.fuzzyDataStock[0].points[0],
        this.fuzzyDataStock[0].points[1],
        this.fuzzyDataStock[0].points[2],
        this.fuzzyDataStock[0].points[3]
        ))
      .and(this.fuzzyDataStock[1].name, new Triangle(
        this.fuzzyDataStock[1].points[0],
        this.fuzzyDataStock[1].points[1],
        this.fuzzyDataStock[1].points[2]
      ))
      .and(this.fuzzyDataStock[2].name, new Trapezoid(
        this.fuzzyDataStock[2].points[0],
        this.fuzzyDataStock[2].points[1],
        this.fuzzyDataStock[2].points[2],
        this.fuzzyDataStock[2].points[3]
      ));
  }

}
