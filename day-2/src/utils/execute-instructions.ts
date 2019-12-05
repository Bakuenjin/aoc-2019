import IOpCode from "../models/OpCodes/IOpCode";
import ExecutionResult from "../models/ExecutionResult";

export default function executeInstructions(instructions: number[], opCodes: IOpCode[]): number[] {
    let pointer: number = 0
    let code: number
    let opCode: IOpCode | undefined
    let result: ExecutionResult

    while (pointer < instructions.length) {
        code = instructions[pointer]

        if (code === 99)
            break

        opCode = opCodes.find(opc => opc.code === code)

        if (!opCode)
            throw new Error(`Unknown OpCode '${code}' at index ${pointer} with value '${instructions[pointer]}'`)
        
        result = opCode.execute(pointer, instructions.slice())
        instructions = result.instructions
        pointer = result.pointer
    }

    return instructions
}