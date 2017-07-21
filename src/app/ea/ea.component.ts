import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk';
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

  public numParents = 10;
  public numChildren = 15;
  public maxStartSize = 20;

  public standardDeviation = 0.1;
  public simulationIterations = 80;

  constructor() {
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

    this.children = [];
    this.parents = this.generateStart(this.numParents);
    this.averageFitness = 0;
    this.bestVector = null;

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
      parent.evaluate(this.simulationIterations, this.data);
    }

    for (let child of this.children) {
      child.evaluate(this.simulationIterations, this.data);
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

    return this.mutate(new Vector(childMinStock, childBuyAmount), this.standardDeviation);
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

  // Auswählen der besten Vektoren
  // Wiederhilung der Prozesses

  mutate(vector: Vector, standardDeviation: number): Vector {
    // Zufallswert innerhalb der zweifachern Standardabweichung - die Standardabweichung
    const mutateMinStock = [];
    const mutateBuyAmount = [];
    vector.minimalStock.forEach((element, index) => {
      let localStandardDeviation = vector.minimalStock[index] * standardDeviation;
      mutateMinStock.push(Math.round(
        vector.minimalStock[index] + ((Math.random() * 2 - 1) * localStandardDeviation)));

      localStandardDeviation = vector.buyAmount[index] * standardDeviation;
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
