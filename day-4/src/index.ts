import input from './input.json'
import Validator from './models/Validator.js'
import { getSimpleValidator, getAdvancedValidator } from './utils/get-validator.js'

function part1(minValue: number, maxValue: number) {
    const validator = getSimpleValidator(minValue, maxValue)
    const validNumbers = validator.allValidNumbers()
    console.log('Part 1:', validNumbers.length)
}

function part2(minValue: number, maxValue: number) {
    const validator = getAdvancedValidator(minValue, maxValue)
    const validNumbers = validator.allValidNumbers()
    console.log('Part 2:', validNumbers.length)
}

function run() {
    const [minValue, maxValue] = input.value.split('-').map(val => parseInt(val))
    part1(minValue, maxValue)
    part2(minValue, maxValue)
}

run()