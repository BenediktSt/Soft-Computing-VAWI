export class Cell {

    constructor(public xCoordinate, public yCoordinate, public value: number, public type: String = 'empty') {

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

}
