import IOpCode from "./IOpCode";
import ExecutionResult from "../ExecutionResult";
import { getParameterModes, getParameterNumber } from "../../utils/parameter-utils";
import ParameterMode from "../ParameterMode";

export default class TrueJumpOpCode implements IOpCode {
    
    public readonly code: number = 5
    public readonly parameterAmount: number = 2
    public readonly pointerJump: number = 3

    execute(pointer: number, instructions: number[]): ExecutionResult {
        const modes: ParameterMode[] = getParameterModes(instructions[pointer], this.parameterAmount)

        let newPointer: number = pointer + this.pointerJump

        const conditionValue: number = getParameterNumber(pointer + 1, modes[0], instructions)
        const pointerValue: number = getParameterNumber(pointer + 2, modes[1], instructions)

        if(conditionValue)
            newPointer = pointerValue
        
        return new ExecutionResult(newPointer, instructions)
    }

}