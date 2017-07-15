export class Vector {

    constructor(
        public minimalStock: number[],
        public buyAmount: number[],
    ) {

    }

    public toString = () : string => {
        let returnString = '';
        this.minimalStock.forEach((elem, index) => {
            returnString += `[${elem},${this.buyAmount[index]}]; `;
        });

        return returnString;
    }
}
