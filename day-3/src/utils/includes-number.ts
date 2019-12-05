export default function includesNumber(firstBoundrary: number, secondBoundrary: number, value: number): boolean {
    const min = firstBoundrary < secondBoundrary ? firstBoundrary : secondBoundrary
    const max = firstBoundrary > secondBoundrary ? firstBoundrary : secondBoundrary
    return value >= min && value <= max
}