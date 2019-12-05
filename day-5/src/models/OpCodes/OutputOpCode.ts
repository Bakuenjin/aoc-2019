import IOpCode from "./IOpCode";
import ParameterMode from "../ParameterMode";
import { getParameterModes, getParameterNumber } from "../../utils/parameter-utils";
import ExecutionResult from "../ExecutionResult";

export default class OutputOpCode implements IOpCode {
    
    public readonly code: number = 4
    public readonly parameterAmount: number = 1
    public readonly pointerJump: number = 2

    execute(pointer: number, instructions: number[]): ExecutionResult {
        const modes: ParameterMode[] = getParameterModes(instructions[pointer], this.parameterAmount)
        const output = getParameterNumber(pointer + 1, modes[0], instructions)
        console.log(`Output:`, output)
        return new ExecutionResult(pointer + this.pointerJump, instructions)
    }

}