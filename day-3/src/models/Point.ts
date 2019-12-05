export default class Point {

    public x: number
    public y: number

    constructor(x: number = 0, y: number = 0) {
        this.x = x
        this.y = y
    }

    /**
     * Checks if the specified point equals this point
     * by checking the x and y propery of both instances.
     */
    equal(otherPoint: Point): boolean {
        return this.x === otherPoint.x &&
               this.y === otherPoint.y
    }

    /**
     * Adds the specified point with this point
     * and returns the result as a new point instance.
     */
    add(otherPoint: Point): Point {
        return new Point (
            this.x + otherPoint.x,
            this.y + otherPoint.y
        )
    }

    /**
     * Subtracts the specified point from this point
     * and retruns the result as a new point instance.
     */
    sub(otherPoint: Point): Point {
        return new Point (
            this.x - otherPoint.x,
            this.y - otherPoint.y
        )
    }

    /**
     * Normalizes the point based on the specified scale.
     */
    normalize(scale: number = 1): Point {
        if (this.length() === 0)
            return this
        
        const normalizer = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
        return new Point (
            Math.round(scale * this.x / normalizer),
            Math.round(scale * this.y / normalizer)
        )
    }

    /**
     * Calculates the length of this point
     * by measuring the distance from (0|0).
     */
    length(): number {
        const poweredX = Math.pow(this.x, 2)
        const poweredY = Math.pow(this.y, 2)
        return Math.sqrt(poweredX + poweredY)
    }

    /**
     * Nice readable string representation of this point.
     */
    toString(): string {
        return `( ${this.x} | ${this.y} )`
    }

}