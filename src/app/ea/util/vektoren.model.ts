import { Product } from './product.model';

interface Order {
    Product: number;
    Delivery: number;
    Amount: number;
}



export class Vector {

    orders: Order[];
    isNextGen: boolean;
    fitness: number;

    constructor(
        public minimalStock: number[],
        public buyAmount: number[],
    ) {
        this.orders = [];
        this.isNextGen = false;
        this.fitness = 0;
    }

    public toString(): string {
        let returnString = '';
        this.minimalStock.forEach((elem, index) => {
            returnString += `[${elem},${this.buyAmount[index]}]; `;
        });

        return returnString;
    }

    public evaluate(iterations: number, data: Product[]) {

        let products = [];

        data.forEach((element) => {
            products.push(Object.create(element));
        });
        let sumEmptyProducts = 0;
        let totalStock = 0;

        for (let i = 0; i < iterations; i++) {

            // Ausführen der Bestellungen
            products = this.calculateOrders(i, products, this.orders);

            this.minimalStock.forEach((elem, index) => {

                // Täglicher Verbrauch
                products[index].stock -= products[index].consumption;

                // Hinzufügen einer Bestellung falls notwendig
                let orderExists = false;
                this.orders.forEach((element) => {
                    if (element.Product === index) {
                        orderExists = true;
                    }
                });

                if (products[index].stock <= elem && !orderExists) {
                     this.orders.push({Product: index, Delivery: i + products[index].deliveryPeriod, Amount: this.buyAmount[index]});
                }
            });

            // Bewerten des Zustandes
            sumEmptyProducts += this.countEmptyProducts(products);
            totalStock += this.getTotalStock(products);

        }

        // console.log('Anzahl lehrer Produkte: ' + sumEmptyProducts);
        // console.log('Durschnittlicher Lagerbestand: ' + totalStock / iterations);

        // Durchschnittlicher Lagerbestand + 5 * sumEmptyProducts
        this.fitness = totalStock / iterations + 2 * sumEmptyProducts;

    }

    private getTotalStock(products: Product[]): number {
        let count = 0;
        products.forEach((elem) => {
            count += elem.stock;
        });
        return count;
    }

    private countEmptyProducts(products: Product[]): number {
        let count = 0;
        products.forEach((elem) => {
            if (elem.stock <= 0) {
                count ++;
            }
        });
        return count;
    }

    private calculateOrders(time: number, products: Product[], orders: Order[]): Product[] {
        orders.forEach((elem) => {
            if (elem.Delivery === time) {
                products[elem.Product].stock += elem.Amount;
            }
        });

        return products;
    }
}
