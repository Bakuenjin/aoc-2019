import input from '../input.json'

export function loadInstructions(): number[] {
    return input.data.split(',').map(Number)
}

export function loadOutput(): number {
    return input.output
}