import Point from "../models/Point";

export default function stringToDirection(str: string): Point {
    const direction = str.substr(0, 1)
    const length = parseInt(str.substr(1))

    switch (direction) {
        case 'U': return new Point(0, length)
        case 'D': return new Point(0, -length)
        case 'R': return new Point(length, 0)
        case 'L': return new Point(-length, 0)
    }

    throw new Error('Undefined direction!')
}