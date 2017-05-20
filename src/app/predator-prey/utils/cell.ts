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

export class Cell {

    direction: Direction;

    constructor(
        public xCoordinate,
        public yCoordinate,
        public value: number,
        public type: String = 'empty') {
            this.direction = null;
    }

    public gainEnergy() {
        this.value ++;
    }

    public populate(tupel: Cell[]) {
        if (this.value >= 8 && this.type === 'prey') {
            this.value = 4;
        }
        if (tupel[4].value >= 8 && this.type === 'empty') {
            this.value = 1;
            this.type = 'prey';
        }
    }

    public moveDirection(tupel: Cell[]) {

        const potentialDirections: Number[] = [];

        // get aviallable fields
        tupel.forEach((cell, index) => {
            if (cell.type === 'empty'){
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
            cell.type === 'empty' &&
            (cell.direction + index) === 7) { // Wenn Position und Ausrichtung passend sind
                // der erste Treffer gewinnt
                this.value  = cell.value;
                this.direction = null;
                this.type = cell.type;
                return;
            }else if (cell.direction !== null && cell.type !== 'empty') {
                this.value = 0;
                this.direction = null;
                this.type = 'empty';
            }
        });

        // TODO: Entfernen der alten Zellen
    }

}
