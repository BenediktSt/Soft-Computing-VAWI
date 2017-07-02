import { Logic } from 'es6-fuzz';

export class FuzzyController {

    constructor(public logic: Logic) {}

    getSet(value: number) {
        const res = this.logic.defuzzify(value);
        const set = [];
        res.rules.forEach(element => {
            set.push({key: element.output, value: element.fuzzy});
        });
        return set;
    }

    logicalAnd(...values: number[]) {
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
                // val *= argument[index].value;
            });
            ret.push({key: key, value: val})
        });

        return ret;
    }


}
