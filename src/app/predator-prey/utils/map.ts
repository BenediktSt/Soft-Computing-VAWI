import { Cell } from './cell';
import { Ruleset } from './rules';

function modulo(num: number, mod: number): number {
    return ((num % mod) + mod) % mod;
}

export const colorEmpty = '#B19CD9';
export const colorPrey = 'lightgreen';
export const colorPredator = 'lightcoral';

export class Map {

    public fields: Cell[][];
    private numCells: number;

    constructor(public size: number, public ruleSet: Ruleset) {

        this.fields = [];
        this.numCells = 0;

        for (let i = 0; i < this.size; i++) {
            this.fields[i] = [];
            for (let j = 0; j < this.size; j++) {
                this.fields[i][j] = new Cell(j, i, 0, 0);
                // this.numCells++;
            }
        }
    }

    public getNewID() {
        this.numCells ++;
        return this.numCells;
    }

    public getCell(xValue: number, yValue: number): Cell {
        return this.fields[modulo(yValue, this.size)][modulo(xValue, this.size)];
    }

    public setCell(cell: Cell) {
        this.fields[cell.yCoordinate][cell.xCoordinate] = cell;
    }

    public getNeighbours(xValue: number, yValue: number): Cell[] {
        const tuple: Cell[] = [];

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
        this.numCells++;
        this.setCell(new Cell(xValue, yValue, 1, this.numCells, 'prey', colorPrey));
    }

    public addPredator(xValue?: number, yValue?: number) {
        if (!xValue) {
            xValue = Math.floor((Math.random() * this.size));
        }

        if (!yValue) {
            yValue = Math.floor((Math.random() * this.size));
        }
        this.numCells++;
        this.setCell(new Cell(xValue, yValue, 1, this.numCells, 'predator', colorPredator));
    }

    public calculateMovement() {
        this.fields.forEach(line => {
            line.forEach(cell => {

                if (cell.populate(this.getNeighbours(cell.xCoordinate, cell.yCoordinate), this.numCells)) {
                    this.numCells ++;
                }

                if (cell.type !== 'empty' && !cell.reproduced) {
                    cell.gainEnergy();
                    cell.moveDirection(this.getNeighbours(cell.xCoordinate, cell.yCoordinate));
                }

            });
        });

        this.fields.forEach(line => {
            line.forEach(cell => {
                if (cell.type === 'empty') {
                    cell.processMovement(this.getNeighbours(cell.xCoordinate, cell.yCoordinate));
                }
            });
        });

        this.fields.forEach(line => {
            line.forEach(cell => {
                if (cell.type !== 'empty') {
                    cell.processMovement(this.getNeighbours(cell.xCoordinate, cell.yCoordinate));
                }
                if (cell.reproduced) {
                    cell.reproduced = false;
                }
            });
        });
    }

    public iterate () {
         this.fields.forEach(line => {
            line.forEach(cell => {
                cell = this.ruleSet.populate(this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                cell = this.ruleSet.gainEnergy(this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                cell = this.ruleSet.moveDirection(this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
            });
         });

         this.fields.forEach(line => {
            line.forEach(cell => {
                cell = this.ruleSet.processMovement(this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                cell = this.ruleSet.unmarkReproduktion(this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
            });
         });
    }

}
