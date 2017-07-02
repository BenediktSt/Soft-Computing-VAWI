import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MdSnackBar } from '@angular/material';

import { Logic } from 'es6-fuzz';
import { Triangle } from 'es6-fuzz/lib/curve/triangle';
import { Trapezoid } from 'es6-fuzz/lib/curve/trapezoid';

import { FuzzyController } from './util/fuzzyController';
import { Ruleset } from './util/rules';
import { FuzzySet } from './util/fuzzySet';

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
  public ruleset: Ruleset;

  constructor(private fb: FormBuilder , public snackBar: MdSnackBar) {
    this.purchaseForm = this.fb.group({
      demand: this.fb.group({
        prodA: ['', Validators.required ],
        prodB: ['', Validators.required ],
        prodC: ['', Validators.required ],
        prodD: ['', Validators.required ]
      }),
      stock: this.fb.group({
        prodA: ['', Validators.required ],
        prodB: ['', Validators.required ],
        prodC: ['', Validators.required ],
        prodD: ['', Validators.required ]
      })
    });

    this.initializeFuzzyLogic();
    this.ruleset = new Ruleset(this.fuzzyControllerDemand, this.fuzzyControllerStock);

    this.showFuzzy = false;

  }

  ngOnInit() {
  }

  fillrandom() {
    this.purchaseForm.get('demand').get('prodA').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('demand').get('prodB').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('demand').get('prodC').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('demand').get('prodD').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('stock').get('prodA').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('stock').get('prodB').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('stock').get('prodC').setValue(Math.floor((Math.random() * 50)));
    this.purchaseForm.get('stock').get('prodD').setValue(Math.floor((Math.random() * 50)));
  }

  calculate() {
    if (this.purchaseForm.status === 'VALID') {
      this.result = [];
      this.result.push('demandProdA' + JSON.stringify(
        this.fuzzyControllerDemand.getSet(this.purchaseForm.get('demand').get('prodA').value)));
      this.result.push('demandProdB' + JSON.stringify(
        this.fuzzyControllerDemand.getSet(this.purchaseForm.get('demand').get('prodB').value)));
      this.result.push('demandProdC' + JSON.stringify(
        this.fuzzyControllerDemand.getSet(this.purchaseForm.get('demand').get('prodC').value)));
      this.result.push('demandProdD' + JSON.stringify(
        this.fuzzyControllerDemand.getSet(this.purchaseForm.get('demand').get('prodD').value)));
      this.result.push('stockProdA' + JSON.stringify(
        this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodA').value)));
      this.result.push('stockProdB' + JSON.stringify(
        this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodB').value)));
      this.result.push('stockProdC' + JSON.stringify(
        this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodC').value)));
      this.result.push('stockProdD' + JSON.stringify(
        this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodD').value)));
      this.result.push('Gesamtes Lager: ' + JSON.stringify(this.getTotalStockSet()));

        this.ruleset.executeAllRules(
          this.purchaseForm.get('demand').value,
          this.purchaseForm.get('stock').value,
          this.getTotalStockSet()
        );
  }else {
      this.snackBar.open('Bitte alle Felder befüllen.', 'OK', {
        duration: 2000,
      });
    }
  }

  getTotalStockSet(): FuzzySet {
    // Der Und-Operator liefert meistens für alle Sets 0
    // Der Oder-Operator liefert meistens für alle Sets 1
    // => Ansatz: Mittelwert der einzelnen Sets

    const stockSets = [];
    stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodA').value));
    stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodB').value));
    stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodC').value));
    stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodD').value));

    const totalSet = new FuzzySet();
    stockSets[0].pairs.forEach((element, index) => {
      let value = 0;
      const key = element.key;
      for (const stock of stockSets) {
        value += stock.getValueByKey(element.key);
      }
      value = value / stockSets.length;
      totalSet.addPair(key, value);
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
