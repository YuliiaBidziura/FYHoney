import {makeAutoObservable} from 'mobx';
export default class TotalSumOfOrder  {
    constructor() {
        this._totalSum = 0
        makeAutoObservable(this);
    };

    setTotalSum(sum) {
        this._totalSum += sum
        return
    }
    

    get totalSum() {
        return this._totalSum;
    }
}