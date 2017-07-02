import { Logic } from 'es6-fuzz';
import { FuzzySet } from './fuzzySet';

export class FuzzyController {

    constructor(public logic: Logic) {}

    public getSet(value: number): FuzzySet {
        const res = this.logic.defuzzify(value);
        const set = new FuzzySet();
        res.rules.forEach(element => {
            set.addPair(element.output, element.fuzzy);
        });
        return set;
    }

    public logicalAnd(...values: number[]) {
        const sets = [];
        values.forEach((element) => {
            sets.push(this.getSet(element));
        });

        const ret = [];
        sets[0].forEach((element, index) => {
            let val = 1;
            const key = element.key;
            sets.forEach((argument) => {
                if (argument[index].value > val) {
                    val = argument[index].value;
                }
            });
            ret.push({key: key, value: val})
        });

        return ret;
    }


}
