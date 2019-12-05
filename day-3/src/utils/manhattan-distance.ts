import Point from "../models/Point";

export default function manhattanDistance(origin: Point, point: Point): number {
    return Math.abs(origin.x - point.x) + Math.abs(origin.y - point.y)
}