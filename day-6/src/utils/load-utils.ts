import { data, test } from "../input";

export function loadData(): string[] {
    return data.split('\n')
}

export function loadTest(): string[] {
    return test.split('\n')
}
