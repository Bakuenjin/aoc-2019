import ParameterMode from "../models/ParameterMode";

export function getParameterModes(num: number, amount: number): ParameterMode[] {
    const modes: ParameterMode[] = []
    const numString = num.toString().padStart(2, '0')
    const modesChunk = numString.substr(0, numString.length - 2)

    if (modesChunk.length) {
        modesChunk.split('').reverse().forEach(mode => {
            const modeNum = parseInt(mode)
            modes.push(<ParameterMode>modeNum)
        })
    }

    while(modes.length < amount)
        modes.push(ParameterMode.Position)

    return modes
}

export function getParameterNumber(index: number, mode: ParameterMode, instructions: number[]): number {
    switch (mode) {
        case ParameterMode.Position:
            return instructions[instructions[index]]
        case ParameterMode.Immediate:
            return instructions[index]
    }
    throw new Error('Unknown parameter mode!')
}
