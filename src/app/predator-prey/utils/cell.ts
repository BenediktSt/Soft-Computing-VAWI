export class Cell {

    constructor(public xCoordinate, public yCoordinate, public value: number, public type: String = 'empty') {

    }

    public gainEnergy(){
        this.value ++;
    }

}
