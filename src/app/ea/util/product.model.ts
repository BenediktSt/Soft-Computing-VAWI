export class Product {

    constructor(
        public name: string,
        public size: number,
        public deliveryPeriod: number,
        public consumption: number,
        public stock: number = 10
    ) {

    }

    getData(): String[] {
        return [
            this.name,
            this.size.toString(),
            this.deliveryPeriod.toString(),
            this.consumption.toString(),
            this.stock.toString()
        ]
    }
}