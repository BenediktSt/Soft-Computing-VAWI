import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MdSnackBar } from '@angular/material';

import { Product } from './util/product.model';
import { Vector } from './util/vektoren.model';

@Component({
  selector: 'app-ea',
  templateUrl: './ea.component.html',
  styleUrls: ['./ea.component.css']
})
export class EaComponent implements OnInit {

  public data: Product[];
  public parents: Vector[];
  public children: Vector[];
  public averageFitness: number;
  public bestVector: Vector;

  public numParents: number;
  public numChildren: number;
  public maxStartSize: number;

  public standardDeviationMinimalStock: Array<number>;
  public standardDeviationbuyAmount: Array<number>;
  public simulationIterations: number;

  public configForm: FormGroup;

  public showConfig: boolean;
  public editConfig: boolean;

  constructor(private fb: FormBuilder, public snackBar: MdSnackBar) {
    this.data = [
      new Product('A', 0.01, 3, 1),
      new Product('B', 0.02, 2, 1),
      new Product('C', 0.03, 1, 1),
      new Product('D', 0.04, 7, 1),
      new Product('E', 0.05, 3, 1),
      new Product('F', 0.06, 1, 1),
      new Product('G', 0.07, 6, 1),
      new Product('H', 0.08, 4, 1),
      new Product('I', 0.09, 3, 1),
      new Product('J', 0.1, 2, 1),
    ];

    // Config
    this.numParents = 10;
    this.numChildren = 15;
    this.maxStartSize = 20;
    this.simulationIterations = 80;
    this.standardDeviationMinimalStock = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1];
    this.standardDeviationbuyAmount = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1];

    this.children = [];
    this.parents = this.generateStart(this.numParents);
    this.averageFitness = 0;
    this.bestVector = null;
    this.showConfig = false;
    this.editConfig = false;

    this.configForm = this.fb.group({
      numParents: [{value: this.numParents, disabled: true}, Validators.required ],
      numChildren: [{value: this.numChildren, disabled: true}, Validators.required ],
      numMaxStartSize: [{value: this.maxStartSize, disabled: true}, Validators.required ],
      minimalStock: this.fb.group({
        prodA: [{value: this.standardDeviationMinimalStock[0], disabled: true}, Validators.required ],
        prodB: [{value: this.standardDeviationMinimalStock[1], disabled: true}, Validators.required ],
        prodC: [{value: this.standardDeviationMinimalStock[2], disabled: true}, Validators.required ],
        prodD: [{value: this.standardDeviationMinimalStock[3], disabled: true}, Validators.required ],
        prodE: [{value: this.standardDeviationMinimalStock[4], disabled: true}, Validators.required ],
        prodF: [{value: this.standardDeviationMinimalStock[5], disabled: true}, Validators.required ],
        prodG: [{value: this.standardDeviationMinimalStock[6], disabled: true}, Validators.required ],
        prodH: [{value: this.standardDeviationMinimalStock[7], disabled: true}, Validators.required ],
        prodI: [{value: this.standardDeviationMinimalStock[8], disabled: true}, Validators.required ],
        prodJ: [{value: this.standardDeviationMinimalStock[9], disabled: true}, Validators.required ]
      }),
      buyAmount: this.fb.group({
        prodA: [{value: this.standardDeviationbuyAmount[0], disabled: true}, Validators.required ],
        prodB: [{value: this.standardDeviationbuyAmount[1], disabled: true}, Validators.required ],
        prodC: [{value: this.standardDeviationbuyAmount[2], disabled: true}, Validators.required ],
        prodD: [{value: this.standardDeviationbuyAmount[3], disabled: true}, Validators.required ],
        prodE: [{value: this.standardDeviationbuyAmount[4], disabled: true}, Validators.required ],
        prodF: [{value: this.standardDeviationbuyAmount[5], disabled: true}, Validators.required ],
        prodG: [{value: this.standardDeviationbuyAmount[6], disabled: true}, Validators.required ],
        prodH: [{value: this.standardDeviationbuyAmount[7], disabled: true}, Validators.required ],
        prodI: [{value: this.standardDeviationbuyAmount[8], disabled: true}, Validators.required ],
        prodJ: [{value: this.standardDeviationbuyAmount[9], disabled: true}, Validators.required ]
      })
    });
  }

  ngOnInit() {
  }

  // Interface
  makeChildren() {
    this.children = this.getNChildren(this.parents, this.numChildren);
  }

  // Interface
  evaluateVectors() {
    for (let parent of this.parents) {
      // parent.evaluate(this.simulationIterations, this.data);
      parent.evaluate2(this.data);
    }

    for (let child of this.children) {
      //  child.evaluate(this.simulationIterations, this.data);
      child.evaluate2(this.data);
    }

    this.averageFitness = this.getAverageFitness(this.parents);
  }

  // Interface
  buildNextGen() {
    this.parents = this.selectForNextGen(this.numParents, this.children);

    for (let parent of this.parents) {
      parent.isNextGen = false;
    }
    this.averageFitness = this.getAverageFitness(this.parents);
  }

  // Interface
  iterate(iterations: number) {
    for (let i = 0; i < iterations; i++){
      this.makeChildren();
      this.evaluateVectors();
      this.buildNextGen();
    }
  }

  // Interface
  editConfiguration() {
    this.editConfig = true;
    this.configForm.enable();
  }

  // Interface
  closeConfiguration() {
    this.editConfig = false;
    this.showConfig = false;
    this.configForm.disable();
  }

  // Interface
  saveConfiguration() {
    if (this.configForm.status === 'VALID') {
      this.numParents = this.configForm.get('numParents').value;
      this.numChildren = this.configForm.get('numChildren').value;
      this.maxStartSize = this.configForm.get('numMaxStartSize').value;

      // reset
      this.children = [];
      this.parents = this.generateStart(this.numParents);
      this.averageFitness = 0;
      this.bestVector = null;
      this.showConfig = false;
      this.editConfig = false;
    }else {
      this.snackBar.open('Bitte alle Felder befüllen.', 'OK', {
        duration: 2000,
      });
    }
  }

  generateStart(parents: number): Vector[] {
    const start = [];
    for (let i = 0; i < parents; i++) {
      const minSock = [];
      const buy = [];
      for (let j = 0; j < this.data.length; j++) {
        minSock.push(Math.floor(Math.random() * this.maxStartSize));
        buy.push(Math.floor(Math.random() * this.maxStartSize));
      }
      start.push(new Vector(minSock, buy));
    }
    return start;
  }

  getChild(parent1: Vector, parent2: Vector): Vector {
    // Rekombination durch Mittelwertbildung
    const childMinStock = [];
    const childBuyAmount = [];

    parent1.minimalStock.forEach((element, index) => {
      childMinStock.push(Math.round((parent1.minimalStock[index] + parent2.minimalStock[index]) / 2));
      childBuyAmount.push(Math.round((parent1.buyAmount[index] + parent2.buyAmount[index]) / 2));
    });

    return this.mutate(new Vector(childMinStock, childBuyAmount), this.standardDeviationMinimalStock, this.standardDeviationbuyAmount);
  }

  getNChildren(parents: Vector[], numberChildren: number): Vector[] {
    const children = [];
    for (let i = 0; i < numberChildren; i++) {
      // get parents
      children.push(this.getChild(
        parents[Math.floor(Math.random() * parents.length)],
        parents[Math.floor(Math.random() * parents.length)],
        )
      );
    }
    return children;
  }

  mutate(vector: Vector, standardDeviationMinimalStock: Array<number>, standardDeviationbuyAmount: Array<number>): Vector {
    // Zufallswert innerhalb der zweifachern Standardabweichung - die Standardabweichung
    const mutateMinStock = [];
    const mutateBuyAmount = [];
    vector.minimalStock.forEach((element, index) => {
      let localStandardDeviation = vector.minimalStock[index] * standardDeviationMinimalStock[index];
      mutateMinStock.push(Math.round(
        vector.minimalStock[index] + ((Math.random() * 2 - 1) * localStandardDeviation)));

      localStandardDeviation = vector.buyAmount[index] * standardDeviationbuyAmount[index];
      mutateBuyAmount.push(Math.round(
        vector.buyAmount[index] + ((Math.random() * 2 - 1) * localStandardDeviation)));
    });

    return new Vector(mutateMinStock, mutateBuyAmount);
  }

  selectForNextGen(numberParents: number, children: Vector[]): Vector[] {
    const nextGen = [];
    for (let i = 0; i < numberParents; i ++) {
      let bestChild = null;
      for (let child of children) {
        if ((bestChild === null  || child.fitness < bestChild.fitness) && !child.isNextGen) {
          bestChild = child;
        }
      }
      bestChild.isNextGen = true;
      nextGen.push(bestChild);

      // Besten Vektor merken
      if (this.bestVector === null || bestChild.fitness < this.bestVector.fitness) {
        this.bestVector = Object.create(bestChild);
        this.bestVector.isNextGen = false;
      }
    }
    return nextGen;
  }

  getAverageFitness(vectors: Vector[]): number {
    let sum = 0;
    for (const vector of vectors){
      sum += vector.fitness;
    }
    return sum / vectors.length;
  }

}
