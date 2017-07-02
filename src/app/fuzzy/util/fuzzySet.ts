export class FuzzySet {

    public pairs = [];

    constructor(){};

    public addPair(key: string, value: number){
        if (this.getValueByKey(key) === -1){
            this.pairs.push({key: key, value: value});
        }else{
            console.log(new Error('Doppelter Key'));
        }
    }

    public getValueByKey(key: string): number{
        for (const pair of this.pairs) {
            if (pair.key === key) {
                return pair.value;
            }
        }
        return -1;
    }
}