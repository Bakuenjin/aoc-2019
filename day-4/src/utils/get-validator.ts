import Validator from "../models/Validator";
import SimpleAdjacentsCondition from "../models/SimpleAdjacentsCondition";
import NeverDecreaseCondition from "../models/NeverDecreaseCondition";
import AdvancedAdjacentsCondition from "../models/AdvancedAdjacentsCondition";

export function getSimpleValidator(minValue: number, maxValue: number) {
    return new Validator(minValue, maxValue, [
        new NeverDecreaseCondition(),
        new SimpleAdjacentsCondition()
    ])
}

export function getAdvancedValidator(minValue: number, maxValue: number) {
    return new Validator(minValue, maxValue, [
        new NeverDecreaseCondition(),
        new AdvancedAdjacentsCondition()
    ])
}