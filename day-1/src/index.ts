import input from './input.json'
import LaunchModule from './LaunchModule.js'

function run() {
    const launchModules = input.masses.map(mass => new LaunchModule(mass))
    const simpleFuelList = launchModules.map(mod => mod.neededFuel())
    const completeFuelList = launchModules.map(mod => mod.neededFuel(true))

    console.log('Part 1:', simpleFuelList.reduce((a, b) => a + b))
    console.log('Part 2:', completeFuelList.reduce((a, b) => a + b))
}

run()