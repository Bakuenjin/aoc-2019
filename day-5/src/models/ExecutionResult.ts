export default class ExecutionResult {

    public readonly pointer: number
    public readonly instructions: number[]

    constructor(pointer: number, instructions: number[]) {
        this.pointer = pointer
        this.instructions = instructions
    }

}