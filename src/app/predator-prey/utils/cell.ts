enum Direction {
    UpLeft,
    Up,
    UpRight,
    Left,
    Right,
    DownLeft,
    Down,
    DownRight
};

import { colorEmpty, colorPredator, colorPrey } from './map';

export class Cell {

    direction: Direction;
    reproduced: boolean;

    constructor(
        public xCoordinate,
        public yCoordinate,
        public value: number,
        public id: number,
        public type: String = 'empty',
        public color: String = colorEmpty) {
            this.direction = null;
            this.reproduced = false;
    }

    public gainEnergy() {
        this.value ++;
    }

    public populate(tupel: Cell[], newId: number): boolean {
        if (this.value >= 8 &&
            this.type === 'prey' &&
            tupel[3].reproduced &&
            tupel[3].value === 1) {
                this.value = 4;
                this.reproduced = true;
                return false;
        }
        if (tupel[4].value >= 8 &&
            tupel[4].type === 'prey' &&
            this.type === 'empty') {
                this.value = 1;
                this.type = 'prey';
                this.color = colorPrey;
                this.reproduced = true;
                this.id = newId;
                return true;
        }
    }

    public moveDirection(tupel: Cell[]) {

        const potentialDirections: Number[] = [];

        // get aviallable fields
        tupel.forEach((cell, index) => {
            if (cell.type === 'empty') {
                potentialDirections.push(index);
            }
        });

        // choose direction to go to
        if (potentialDirections.length !== 0) {
            this.direction = Math.floor((Math.random() * potentialDirections.length));
        }
    }

    public processMovement(tupel: Cell[]) {
        tupel.forEach((cell, index) => {
            if (cell.direction !== null &&
                this.type === 'empty' &&
                (cell.direction + index) === 7) { // Wenn Position und Ausrichtung passend sind
                    // der erste Treffer gewinnt
                    this.value  = cell.value;
                    this.direction = null;
                    this.type = cell.type;
                    this.color = cell.color;
                    this.id = cell.id;
            }else if (
                this.direction !== null &&
                this.type !== 'empty' &&
                cell.id === this.id) {
                    this.value = 0;
                    this.direction = null;
                    this.type = 'empty';
                    this.color = colorEmpty;
                    this.id = 0;
            }
        });

    }

}
