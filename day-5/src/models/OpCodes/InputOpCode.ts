import IOpCode from "./IOpCode";
import ParameterMode from "../ParameterMode";
import { getParameterModes } from "../../utils/parameter-utils";
import { loadInput } from "../../utils/load-data";
import ExecutionResult from "../ExecutionResult";

export default class InputOpCode implements IOpCode {
    
    public readonly code: number = 3
    public readonly parameterAmount: number = 1
    public readonly pointerJump: number = 2

    execute(pointer: number, instructions: number[]): ExecutionResult {
        const input: number = loadInput()
        const saveIndex: number = instructions[pointer + 3]

        instructions[saveIndex] = input
        return new ExecutionResult(pointer + this.pointerJump, instructions)

    }

}