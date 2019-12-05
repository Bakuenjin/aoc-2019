import ICondition from "./ICondition";
import numberToDigitArray from "../utils/number-to-digit-array";

export default class AdvancedAdjacentsCondition implements ICondition {

    private validAdjacents(currFirst: number, currSecond: number, prev: number | undefined, next: number | undefined): boolean {
        return currFirst === currSecond &&
            (prev === undefined || prev !== currFirst) &&
            (next === undefined || next !== currSecond)
    }

    check(num: number): boolean {
        const digits: number[] = numberToDigitArray(num)
        let currFirstDigit: number = digits[0]
        let currSecondDigit: number
        let prevDigit: number
        let nextDigit: number

        for (let i = 1; i < digits.length; i++) {
            currSecondDigit = digits[i]
            prevDigit = digits[i - 2]
            nextDigit = digits[i + 1]
            if (this.validAdjacents(currFirstDigit, currSecondDigit, prevDigit, nextDigit))
                return true
            currFirstDigit = currSecondDigit
        }

        return false
    }

}