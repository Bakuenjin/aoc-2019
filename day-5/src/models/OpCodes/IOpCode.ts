import ExecutionResult from "../ExecutionResult";

export default interface IOpCode {

    readonly code: number
    readonly parameterAmount: number
    readonly pointerJump: number

    execute(pointer: number, instructions: number[]): ExecutionResult

}