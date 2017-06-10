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

}
