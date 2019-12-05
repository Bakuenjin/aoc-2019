import Point from "./Point";

export default class PathIntersection {

    public readonly point: Point
    public readonly firstPathSteps: number
    public readonly secondPathSteps: number

    constructor(point: Point, firstSteps: number, secondSteps: number) {
        this.point = point
        this.firstPathSteps = firstSteps
        this.secondPathSteps = secondSteps
    }

    get allSteps(): number {
        return this.firstPathSteps + this.secondPathSteps
    }

}