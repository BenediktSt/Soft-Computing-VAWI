import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MdSnackBar } from '@angular/material';

import { Logic } from 'es6-fuzz';
import { Triangle } from 'es6-fuzz/lib/curve/triangle';
import { Trapezoid } from 'es6-fuzz/lib/curve/trapezoid';

import { FuzzyController } from './util/fuzzyController';

@Component({
  selector: 'app-fuzzy',
  templateUrl: './fuzzy.component.html',
  styleUrls: ['./fuzzy.component.css']
})
export class FuzzyComponent implements OnInit {

  public purchaseForm: FormGroup;

  public fuzzyControllerDemand: FuzzyController;
  public fuzzyControllerStock: FuzzyController;

  public showFuzzy: boolean;

  public result: Array<any> = [];

  constructor(private fb: FormBuilder , public snackBar: MdSnackBar) {
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

    this.initializeFuzzyLogic();

    this.showFuzzy = false;

  }

  ngOnInit() {
  }

  fillrandom() {
    this.purchaseForm.get('demandProdA').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('demandProdB').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('demandProdC').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('demandProdD').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('stockProdA').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('stockProdB').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('stockProdC').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('stockProdD').setValue(Math.floor((Math.random() * 50)));
  }

  calculate() {
    if (this.purchaseForm.status === 'VALID') {
      this.result = [];
      this.result.push('demandProdA' + JSON.stringify(this.fuzzyControllerDemand.getSet(this.purchaseForm.get('demandProdA').value)));
      this.result.push('demandProdB' + JSON.stringify(this.fuzzyControllerDemand.getSet(this.purchaseForm.get('demandProdB').value)));
      this.result.push('demandProdC' + JSON.stringify(this.fuzzyControllerDemand.getSet(this.purchaseForm.get('demandProdC').value)));
      this.result.push('demandProdD' + JSON.stringify(this.fuzzyControllerDemand.getSet(this.purchaseForm.get('demandProdD').value)));
      this.result.push('stockProdA' + JSON.stringify(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stockProdA').value)));
      this.result.push('stockProdB' + JSON.stringify(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stockProdB').value)));
      this.result.push('stockProdC' + JSON.stringify(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stockProdC').value)));
      this.result.push('stockProdD' + JSON.stringify(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stockProdD').value)));
      this.result.push('Gesamtes Lager: ' + JSON.stringify(this.getTotalStockSet()));
  }else {
      this.snackBar.open('Bitte alle Felder befüllen.', 'OK', {
        duration: 2000,
      });
    }
  }

  getTotalStockSet() {
    // Der Und-Operator liefert meistens für alle Sets 0
    // Der Oder-Operator liefert meistens für alle Sets 1
    // => Ansatz: Mittelwert der einzelnen Sets

    const stockSets = [];
    stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stockProdA').value));
    stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stockProdB').value));
    stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stockProdC').value));
    stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stockProdD').value));

    const totalSet = [];
    stockSets[0].forEach((element, index) => {
      let value = 0;
      const key = element.key;
      for (const stock of stockSets) {
        value += stock[index].value;
      }
      value = value / stockSets.length;
      totalSet.push({key: key, value: value});
    });
    return totalSet;
  }

  initializeFuzzyLogic() {
    const logicDemand = new Logic();
    logicDemand
      .init('niedrig', new Trapezoid(-1, 0, 10, 15))
      .and('mittel', new Trapezoid(10, 20, 25, 35))
      .and('hoch', new Trapezoid(30, 40, 50, 51));

    const logicStock = new Logic();
    logicStock
      .init('niedrig', new Trapezoid(-1, 0, 5, 15))
      .and('mittel', new Triangle(10, 25, 40))
      .and('hoch', new Trapezoid(25, 40, 50, 51));

    this.fuzzyControllerDemand = new FuzzyController(logicDemand);
    this.fuzzyControllerStock = new FuzzyController(logicStock);
  }

}
