import { FuzzySet } from './fuzzySet';
import { Logic } from 'es6-fuzz';
import { FuzzyController } from './fuzzyController';

export class Ruleset {

    private names = ['prodA', 'prodB', 'prodC', 'prodD'];

    constructor(
        public fuzzyControllerDemand: FuzzyController,
        public fuzzyControllerStock: FuzzyController){}
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
            console.log(demand);

            for (let i = 0; i < this.names.length; i++) {
                console.log(
                    'Regel 1 für ' + this.names[i] + ' ' + this.rule1(
                    this.fuzzyControllerDemand.getSet(demand[this.names[i]]),
                    this.fuzzyControllerStock.getSet(stock[this.names[i]]),
                    totalStock));
            }

    }

    /**
     * R1: IF Wert Nachfrage(p) == "hoch" AND Lager(g) == "niedrig" AND LagerGesamt == "niedrig"
     *     THEN Kaufen(p) = hoch
     */
    public rule1(demand: FuzzySet, stock: FuzzySet, totalStock: FuzzySet) {
        return Math.max(
            demand.getValueByKey('hoch'),
            stock.getValueByKey('niedrig'),
            totalStock.getValueByKey('niedrig'));
    }

    /**
     * R2: IF Wert Nachfrage(p) == "hoch" AND Lager(g) != "hoch" AND LagerGesamt != "hoch"
     *     THEN Kaufen(p) = mittel
     */
    public rule2(demand: FuzzySet, stock: FuzzySet, totalStock: FuzzySet) {
        return Math.max(
            demand.getValueByKey('hoch'),
            1 - stock.getValueByKey('hoch'),
            1 - totalStock.getValueByKey('hoch'));
    }

    /**
     * R3: IF Wert Nachfrage(p) == "hoch" AND Lager(g) == "hoch"
     *     THEN Kaufen(p) = niedrig
     */
    public rule3(demand: FuzzySet, stock: FuzzySet) {
        return Math.max(
            demand.getValueByKey('hoch'),
            stock.getValueByKey('hoch'));
    }

    /**
     * R4: IF Wert Nachfrage(p) == "hoch" AND LagerGesamt == "hoch"
     *     THEN Kaufen(p) = niedrig
     */
    public rule4(demand: FuzzySet, totalStock: FuzzySet) {
        return Math.max(
            demand.getValueByKey('hoch'),
            totalStock.getValueByKey('hoch'));
    }

    /**
     * R5: IF Wert Nachfrage(p) == "niedrig"
     *     THEN Kaufen(p) = niedrig
     */
    public rule5(demand: FuzzySet) {
        return Math.max(
            demand.getValueByKey('niedrig'));
    }

    /**
     * R6: IF Wert Nachfrage(p) == "mittel" AND Lager(g) == "niedrig" AND LagerGesamt == "niedrig"
     *     THEN Kaufen(p) = mittel
     */
    public rule6(demand: FuzzySet, stock: FuzzySet, totalStock: FuzzySet) {
        return Math.max(
            demand.getValueByKey('mittel'),
            stock.getValueByKey('niedrig'),
            totalStock.getValueByKey('niedrig'));
    }

    /**
     * R7: IF Wert Nachfrage(p) == "mittel" AND Lager(g) != "niedrig"
     *     THEN Kaufen(p) = niedrig
     */
    public rule7(demand: FuzzySet, stock: FuzzySet) {
        return Math.max(
            demand.getValueByKey('mittel'),
            stock.getValueByKey('niedrig'));
    }

    /**
     * R8: IF Wert Nachfrage(p) == "mittel" AND LagerGesamt == "hoch"
     *     THEN Kaufen(p) = niedrig
     */
    public rule8(demand: FuzzySet, totalStock: FuzzySet) {
        return Math.max(
            demand.getValueByKey('mittel'),
            totalStock.getValueByKey('hoch'));
    }

}
