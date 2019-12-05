import { loadInstructions, loadOutput } from "./utils/load-data"
import executeInstructions from "./utils/execute-instructions"
import IOpCode from "./models/OpCodes/IOpCode"
import { getOpCodes } from "./utils/opcode-utils"
import { findNounAndVerb } from "./utils/noun-and-verb-utils"

function part1(instructions: number[]) {
    const opCodes: IOpCode[] = getOpCodes()
    const completedInstructions = executeInstructions(instructions, opCodes)
    console.log('Part 1:', completedInstructions[0])
}

function part2(instructions: number[], output: number) {
    const result = findNounAndVerb(instructions, output)
    console.log('Part 2:', result)
}

function run() {
    const instructions: number[] = loadInstructions()
    const output: number = loadOutput()
    
    part1(instructions)
    part2(instructions, output)
}


run()