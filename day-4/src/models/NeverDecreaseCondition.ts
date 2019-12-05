import ICondition from "./ICondition";
import numberToDigitArray from "../utils/number-to-digit-array";

export default class NeverDecreaseCondition implements ICondition {

    check(num: number): boolean {
        const digits: number[] = numberToDigitArray(num)
        let prevDigit: number = digits[0]
        let nextDigit: number

        for (let i = 1; i < digits.length; i++) {
            nextDigit = digits[i]
            if (nextDigit < prevDigit)
                return false
            prevDigit = nextDigit
        }

        return true
    }

}