import Point from "./Point";
import includesNumber from "../utils/includes-number";

export default class Vector {

    public readonly origin: Point
    public readonly direction: Point

    constructor(origin: Point, direction: Point) {
        this.origin = origin
        this.direction = direction
    }

    /**
     * Does this vector contain the specified point?
     */
    contains(point: Point): boolean {
        return (
            this.origin.x === point.x && includesNumber(this.origin.y, this.origin.y + this.direction.y, point.y) ||
            this.origin.y === point.y && includesNumber(this.origin.x, this.origin.x + this.direction.x, point.x)
        )
    }

    /**
     * The number of steps needed to reach the specified point
     * starting from the origin of this vector.
     */
    stepsTillPoint(point: Point): number {
        return this.contains(point) ?
            this.origin.sub(point).length() :
            -1
    }

    pointAt(step: number): Point {
        const scaledDirection = this.direction.normalize(step)
        return this.origin.add(scaledDirection)
    }

    length(): number {
        return this.direction.length()
    }
}