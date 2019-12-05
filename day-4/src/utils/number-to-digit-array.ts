export default function numberToDigitArray(num: number): number[] {
    return num.toString().split('').map(Number)
}