import IOpCode from "./IOpCode";
import ExecutionResult from "../ExecutionResult";

export default class AddOpCode implements IOpCode {

    public readonly code: number = 1
    public readonly parameterAmount: number = 3
    public readonly pointerJump: number = 4

    execute(pointer: number, instructions: number[]): ExecutionResult {
        const firstNum: number = instructions[instructions[pointer + 1]]
        const secondNum: number = instructions[instructions[pointer + 2]]
        const saveIndex: number = instructions[pointer + 3]

        instructions[saveIndex] = firstNum + secondNum
        return new ExecutionResult(pointer + this.pointerJump, instructions)
    }

}