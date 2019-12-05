import { loadInstructions } from "./utils/load-data"
import executeInstructions from "./utils/execute-instructions"
import IOpCode from "./models/OpCodes/IOpCode"
import { getSimpleOpCodes, getAdvancedOpCodes } from "./utils/opcode-utils"

function part1(instructions: number[]) {
    const opCodes: IOpCode[] = getSimpleOpCodes()
    console.log('Part 1:')
    executeInstructions(instructions, opCodes)
}

function part2(instructions: number[]) {
    const opCodes: IOpCode[] = getAdvancedOpCodes()
    console.log('Part 2:')
    executeInstructions(instructions, opCodes)
}

function run() {
    const instructions: number[] = loadInstructions()
    
    // part1(instructions)
    part2(instructions)
}


run()