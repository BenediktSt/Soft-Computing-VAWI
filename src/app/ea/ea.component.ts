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

  public numParents = 5;
  public maxStartSize = 20;

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

  }

  ngOnInit() {
  }

  calculate() {
    this.parents[0].evaluate(5, this.data);

    this.children = this.getNChildren(this.parents, 5);

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

    return new Vector(childMinStock, childBuyAmount);
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

  // TODO: Mutation der Kinder
  // Bewertung der einzelnen Vektoren
  // Auswählen der besten Vektoren
  // Wiederhilung der Prozesses

  /*mutate(vector: Vector): Vector {

  }*/

}
