import Point from "./Point";
import Vector from "./Vector";
import PathIntersection from "./PathIntersection";

export default class Path {

    private _origin: Point
    private _vectors: Vector[]

    constructor(origin: Point) {
        this._origin = origin
        this._vectors = []
    }

    /**
     * Extend this path by moving from the current end to the specified direction.
     */
    extend(direction: Point): void {
        let origin: Point = this._origin

        if (this._vectors.length) {
            const lastVec = this._vectors[this._vectors.length - 1]
            origin = lastVec.origin.add(lastVec.direction)
        }

        const vector = new Vector(origin, direction)
        this._vectors.push(vector)
    }

    /**
     * Extends this path by the list of specified directions.
     */
    extendMultiple(...directions: Point[]): void {
        directions.forEach(direction => this.extend(direction))
    }

    /**
     * Does this path contain the specified point?
     */
    contains(point: Point): boolean {
        return this._vectors.some(vector => vector.contains(point))
    }

    /**
     * The number of steps needed to reach the specified point
     * starting from the origin of this path.
     */
    stepsTillPoint(point: Point): number {   
        let steps = 0

        for (const vector of this._vectors) {
            if (vector.contains(point)) {
                steps += vector.stepsTillPoint(point)
                return steps
            }
            steps += vector.direction.length()
        }

        return -1
    }

    getIntersections(otherPath: Path): PathIntersection[] {
        const intersections: PathIntersection[] = []
        
        let currentPoint: Point
        let currentFirstSteps: number
        let currentSecondSteps: number
        let currentIntersection

        this._vectors.forEach(vector => {
            for (let step = 1; step <= vector.length(); step++) {
                currentPoint = vector.pointAt(step)
                if (otherPath.contains(currentPoint)) {
                    currentFirstSteps = this.stepsTillPoint(currentPoint)
                    currentSecondSteps = otherPath.stepsTillPoint(currentPoint)
                    currentIntersection = new PathIntersection(currentPoint, currentFirstSteps, currentSecondSteps)
                    intersections.push(currentIntersection)
                }
            }
        })

        return intersections
    }

}