import IOpCode from "../models/OpCodes/IOpCode";
import AddOpCode from "../models/OpCodes/AddOpCode";
import MultiplyOpCode from "../models/OpCodes/MultiplyOpCode";
import InputOpCode from "../models/OpCodes/InputOpCode";
import OutputOpCode from "../models/OpCodes/OutputOpCode";
import TrueJumpOpCode from "../models/OpCodes/TrueJumpOpCode";
import FalseJumpOpCode from "../models/OpCodes/FalseJumpOpCode";
import LessThanOpCode from "../models/OpCodes/LessThanOpCode";
import EqualOpCode from "../models/OpCodes/EqualOpCode";

export function getSimpleOpCodes(): IOpCode[] {
    return [
        new AddOpCode(),
        new MultiplyOpCode(),
        new InputOpCode(),
        new OutputOpCode()
    ]
}

export function getAdvancedOpCodes(): IOpCode[] {
    const baseOpCodes = getSimpleOpCodes()
    return [
        ...baseOpCodes,
        new TrueJumpOpCode(),
        new FalseJumpOpCode(),
        new LessThanOpCode(),
        new EqualOpCode()
    ]
}

export function getOpCodeValue(num: number): number {
    if (num.toString().length < 3)
        return num
    
    const numString: string = num.toString()
    return parseInt(numString.substr(numString.length - 2))
}