import { FuzzySet } from './fuzzySet';
import { Logic } from 'es6-fuzz';
import { FuzzyController } from './fuzzyController';

export class Ruleset {

    private names = ['prodA', 'prodB', 'prodC', 'prodD'];

    public ruleResults: Array<any>;

    constructor(
        public fuzzyControllerDemand: FuzzyController,
        public fuzzyControllerStock: FuzzyController
        ) {
            this.ruleResults = [
                {prod: 'prodA', buySet: {low: [], middle: [], high: [] }},
                {prod: 'prodB', buySet: {low: [], middle: [], high: [] }},
                {prod: 'prodC', buySet: {low: [], middle: [], high: [] }},
                {prod: 'prodD', buySet: {low: [], middle: [], high: [] }}
            ];
        }
    /**
     * Variablen:
     *  - Nachfrage(p) = Nachfrage für Produkt p
     *  - Lager(p) = Lagerbestand für Produkt p
     *  - LagerGesamt = Lagerbestand aller Produkte
     *  - Kaufen(p) = Kaufempfehlung für Produkt p
     */

    public executeAllRules(
        demand: any,
        stock: any,
        totalStock: FuzzySet
        ) {
            for (let i = 0; i < this.names.length; i++) {
                this.rule1(
                    i,
                    this.fuzzyControllerDemand.getSet(demand[this.names[i]]),
                    this.fuzzyControllerStock.getSet(stock[this.names[i]]),
                    totalStock);

                this.rule2(
                    i,
                    this.fuzzyControllerDemand.getSet(demand[this.names[i]]),
                    this.fuzzyControllerStock.getSet(stock[this.names[i]]),
                    totalStock);

                this.rule3(
                    i,
                    this.fuzzyControllerDemand.getSet(demand[this.names[i]]),
                    this.fuzzyControllerStock.getSet(stock[this.names[i]]));

                this.rule4(
                    i,
                    this.fuzzyControllerDemand.getSet(demand[this.names[i]]),
                    totalStock);

                this.rule5(
                    i,
                    this.fuzzyControllerDemand.getSet(demand[this.names[i]]));

                this.rule6(
                    i,
                    this.fuzzyControllerDemand.getSet(demand[this.names[i]]),
                    this.fuzzyControllerStock.getSet(stock[this.names[i]]),
                    totalStock);

                this.rule7(
                    i,
                    this.fuzzyControllerDemand.getSet(demand[this.names[i]]),
                    this.fuzzyControllerStock.getSet(stock[this.names[i]]));

                this.rule8(
                    i,
                    this.fuzzyControllerDemand.getSet(demand[this.names[i]]),
                    totalStock);
            }

            return this.ruleResults;
    }

    /**
     * R1: IF Wert Nachfrage(p) == "hoch" AND Lager(g) == "niedrig" AND LagerGesamt == "niedrig"
     *     THEN Kaufen(p) = hoch
     */
    public rule1(index: number, demand: FuzzySet, stock: FuzzySet, totalStock: FuzzySet) {
        this.ruleResults[index].buySet.high.push(Math.max(
            demand.getValueByKey('hoch'),
            stock.getValueByKey('niedrig'),
            totalStock.getValueByKey('niedrig')));
    }

    /**
     * R2: IF Wert Nachfrage(p) == "hoch" AND Lager(g) != "hoch" AND LagerGesamt != "hoch"
     *     THEN Kaufen(p) = mittel
     */
    public rule2(index: number, demand: FuzzySet, stock: FuzzySet, totalStock: FuzzySet) {
        this.ruleResults[index].buySet.middle.push(Math.max(
            demand.getValueByKey('hoch'),
            1 - stock.getValueByKey('hoch'),
            1 - totalStock.getValueByKey('hoch')));
    }

    /**
     * R3: IF Wert Nachfrage(p) == "hoch" AND Lager(g) == "hoch"
     *     THEN Kaufen(p) = niedrig
     */
    public rule3(index: number, demand: FuzzySet, stock: FuzzySet) {
        this.ruleResults[index].buySet.low.push(Math.max(
            demand.getValueByKey('hoch'),
            stock.getValueByKey('hoch')));
    }

    /**
     * R4: IF Wert Nachfrage(p) == "hoch" AND LagerGesamt == "hoch"
     *     THEN Kaufen(p) = niedrig
     */
    public rule4(index: number, demand: FuzzySet, totalStock: FuzzySet) {
        this.ruleResults[index].buySet.low.push(Math.max(
            demand.getValueByKey('hoch'),
            totalStock.getValueByKey('hoch')));
    }

    /**
     * R5: IF Wert Nachfrage(p) == "niedrig"
     *     THEN Kaufen(p) = niedrig
     */
    public rule5(index: number, demand: FuzzySet) {
        this.ruleResults[index].buySet.low.push(Math.max(
            demand.getValueByKey('niedrig')));
    }

    /**
     * R6: IF Wert Nachfrage(p) == "mittel" AND Lager(g) == "niedrig" AND LagerGesamt == "niedrig"
     *     THEN Kaufen(p) = mittel
     */
    public rule6(index: number, demand: FuzzySet, stock: FuzzySet, totalStock: FuzzySet) {
        this.ruleResults[index].buySet.middle.push(Math.max(
            demand.getValueByKey('mittel'),
            stock.getValueByKey('niedrig'),
            totalStock.getValueByKey('niedrig')));
    }

    /**
     * R7: IF Wert Nachfrage(p) == "mittel" AND Lager(g) != "niedrig"
     *     THEN Kaufen(p) = niedrig
     */
    public rule7(index: number, demand: FuzzySet, stock: FuzzySet) {
        this.ruleResults[index].buySet.low.push(Math.max(
            demand.getValueByKey('mittel'),
            stock.getValueByKey('niedrig')));
    }

    /**
     * R8: IF Wert Nachfrage(p) == "mittel" AND LagerGesamt == "hoch"
     *     THEN Kaufen(p) = niedrig
     */
    public rule8(index: number, demand: FuzzySet, totalStock: FuzzySet) {
        this.ruleResults[index].buySet.low.push(Math.max(
            demand.getValueByKey('mittel'),
            totalStock.getValueByKey('hoch')));
    }

}
