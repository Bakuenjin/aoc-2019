import input from './input.json'
import Path from './models/Path'
import Point from './models/Point'
import stringToDirection from './utils/string-to-direction'
import PathIntersection from './models/PathIntersection'
import manhattanDistance from './utils/manhattan-distance'

function closestDistanceToOrigin(origin: Point, intersections: PathIntersection[]): number {
    const distances = intersections.map(i => manhattanDistance(origin, i.point))
    return Math.min(...distances)
}

function shortestStepsToIntersection(intersections: PathIntersection[]): number {
    const steps = intersections.map(i => i.allSteps)
    return Math.min(...steps)
}

function run() {
    const origin = new Point()
    const firstPath = new Path(origin)
    const secondPath = new Path(origin)

    const firstDirections = input.path1.map(str => stringToDirection(str))
    const secondDirections = input.path2.map(str => stringToDirection(str))

    firstPath.extendMultiple(...firstDirections)
    secondPath.extendMultiple(...secondDirections)

    const intersections = firstPath.getIntersections(secondPath)
    console.log('Part 1:', closestDistanceToOrigin(origin, intersections))
    console.log('Part 2:', shortestStepsToIntersection(intersections))
}

run()