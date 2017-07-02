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

  public ruleResult: Array<any> = [];
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

      this.ruleResult = this.ruleset.executeAllRules(
        this.purchaseForm.get('demand').value,
        this.purchaseForm.get('stock').value,
        this.getTotalStockSet()
      );

      this.result = [];

      this.ruleResult.forEach((elem, index) => {
        this.result.push({
          Produkt: this.ruleResult[index].prod,
          KaufenNiedrig: this.ruleResult[index].buySet.low.reduce(add, 0) / this.ruleResult[index].buySet.low.length,
          KaufenMittel: this.ruleResult[index].buySet.middle.reduce(add, 0) / this.ruleResult[index].buySet.middle.length,
          KaufenHoch: this.ruleResult[index].buySet.high.reduce(add, 0) / this.ruleResult[index].buySet.high.length
        });
      });

      // TODO: Schönere Ergebnisausgabe

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

function add(a: number, b: number): number{
  return a + b;
}
