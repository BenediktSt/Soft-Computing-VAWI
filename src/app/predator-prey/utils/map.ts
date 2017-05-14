import { Cell } from './cell';

export class Map {

    public fields: Cell[][];

    constructor(public size: number) {

        this.fields = [];

        for (let i = 0; i < this.size; i++) {
            this.fields[i] = [];
            for (let j = 0; j < this.size; j++) {
                this.fields[i][j] = new Cell(j, i, 0 );
            }
        }
    }

    public getCell(xValue: number, yValue: number): Cell {
        return this.fields[yValue % this.size][xValue % this.size];
    }

    public setCell(cell: Cell){
        this.fields[cell.yCoordinate][cell.xCoordinate] = cell;
    }

    public getNeighbours(xValue: number, yValue: number) {
        let tuple: Cell[] = [];

        // Nachbarzellen oberhalb
        tuple.push(this.getCell(xValue - 1, yValue - 1));
        tuple.push(this.getCell(xValue, yValue - 1));
        tuple.push(this.getCell(xValue + 1, yValue - 1));

        // Nachbarzellen nebenan
        tuple.push(this.getCell(xValue - 1, yValue));
        tuple.push(this.getCell(xValue + 1, yValue));

        // Nachbarzellen unterhalb
        tuple.push(this.getCell(xValue - 1, yValue + 1));
        tuple.push(this.getCell(xValue, yValue + 1));
        tuple.push(this.getCell(xValue + 1, yValue + 1));

        return tuple;
    }

    public addPrey(xValue?: number, yValue?: number) {
        if (!xValue) {
            xValue = Math.floor((Math.random() * this.size));
        }

        if (!yValue) {
            yValue = Math.floor((Math.random() * this.size));
        }
        this.setCell(new Cell(xValue, yValue, 1, 'prey'));
    }

    public addPredator(xValue?: number, yValue?: number) {
        if (!xValue) {
            xValue = Math.floor((Math.random() * this.size));
        }

        if (!yValue) {
            yValue = Math.floor((Math.random() * this.size));
        }
        this.setCell(new Cell(xValue, yValue, 2, 'predator'));
    }

}
