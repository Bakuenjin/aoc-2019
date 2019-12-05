import input from '../input.json'

export function loadInstructions(): number[] {
    return input.data.split(',').map(Number)
}

export function loadInput(): number {
    return input.value
}