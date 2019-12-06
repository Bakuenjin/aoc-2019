import { loadData, loadTest } from "./utils/load-utils"
import SpaceObject from "./models/SpaceObject"
import { convertDataToStringMap, convertDataToSpaceObjectMap } from "./utils/convert-utils"

function part1(orbitDataList: string[]) {
    const spaceObjects = convertDataToStringMap(orbitDataList)
    let parentCount = spaceObjects.size

    spaceObjects.forEach((pid, oid) => {
        while(spaceObjects.has(pid)) {
            parentCount++
            pid = <string>spaceObjects.get(pid)
        }
    })

    console.log('Part 1:', parentCount)
}

function part2(orbitDataList: string[]) {
    const spaceObjects = convertDataToSpaceObjectMap(orbitDataList)
    const you = <SpaceObject>spaceObjects.get('YOU')
    const san = <SpaceObject>spaceObjects.get('SAN')

    if (!you || !san)
        throw new Error('Invalid input. YOU and / or SAN does not exist.')
    
    const distance = you.distanceTo(san)

    if (distance === -1)
        throw new Error('Invalid input. YOU and SAN can not meet.')

    console.log('Part 2:', you.distanceTo(san))
}

function run() {
    const orbitDataList = loadData()

    part1(orbitDataList)
    part2(orbitDataList)
}

run()