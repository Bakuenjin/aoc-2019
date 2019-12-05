import IOpCode from "./IOpCode";
import ExecutionResult from "../ExecutionResult";
import { getParameterModes, getParameterNumber } from "../../utils/parameter-utils";
import ParameterMode from "../ParameterMode";

export default class LessThanOpCode implements IOpCode {
    
    public readonly code: number = 7
    public readonly parameterAmount: number = 3
    public readonly pointerJump: number = 4

    execute(pointer: number, instructions: number[]): ExecutionResult {
        const modes: ParameterMode[] = getParameterModes(instructions[pointer], this.parameterAmount)
        const firstNum: number = getParameterNumber(pointer + 1, modes[0], instructions)
        const secondNum: number = getParameterNumber(pointer + 2, modes[1], instructions)
        const saveIndex: number = instructions[pointer + 3]
        
        instructions[saveIndex] = firstNum < secondNum ? 1 : 0

        return new ExecutionResult(pointer + this.pointerJump, instructions)
    }

}