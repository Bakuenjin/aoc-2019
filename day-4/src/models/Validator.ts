import numberToDigitArray from "../utils/number-to-digit-array"
import ICondition from "./ICondition"

export default class Validator {

    private _minValue: number
    private _maxValue: number
    private _conditions: ICondition[]

    constructor(minValue: number, maxValue: number, conditions: ICondition[] = []) {
        this._minValue = minValue
        this._maxValue = maxValue
        this._conditions = conditions
    }

    private isInRange(num: number): boolean {
        return num >= this._minValue && num <= this._maxValue
    }

    isValid(num: number): boolean {
        return this.isInRange(num) && this._conditions.every(condition => condition.check(num))
    }

    allValidNumbers(): number[] {
        const validNumbers: number[] = []
        for (let i = this._minValue; i <= this._maxValue; i++)
            if (this.isValid(i))
                validNumbers.push(i)
        return validNumbers
    }

}