import executeInstructions from "./execute-instructions"
import { getOpCodes } from "./opcode-utils"

export function findNounAndVerb(instructions: number[], resultValue: number): number {
    const opCodes = getOpCodes()
    let currentNumberText: string = '0000'

    while(parseInt(currentNumberText) < 10000) {
        const nounAndVerb = stringToNounAndVerb(currentNumberText)
        instructions[1] = nounAndVerb.noun
        instructions[2] = nounAndVerb.verb

        const completedInstructions: number[] = executeInstructions(instructions, opCodes)
        if (completedInstructions[0] === resultValue)
            break
        currentNumberText = (parseInt(currentNumberText) + 1).toString().padStart(4, '0')
    }
    return parseInt(currentNumberText)
}

type NounAndVerb = {
    noun: number
    verb: number
}

function stringToNounAndVerb(str: string): NounAndVerb {
    if (str.length !== 4)
        throw new Error('string does not have the required length.')
    
    const nounTxt = str.slice(0, 2)
    const verbTxt = str.slice(2, 4)

    return {
        noun: parseInt(nounTxt),
        verb: parseInt(verbTxt)
    }
}