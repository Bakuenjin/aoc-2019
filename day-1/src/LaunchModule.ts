export default class LaunchModule {

    private _mass: number

    constructor(mass: number) {
        this._mass = mass
    }

    neededFuel(includeFuelWeight: boolean = false): number {
        if (!includeFuelWeight) {
            return Math.floor(this._mass / 3) - 2
        }
        else {
            let currentMass: number = this._mass
            let currentFuel: number
            let combinedFuel: number = 0

            while(currentMass > 0) {
                currentFuel = Math.floor(currentMass / 3) - 2
                if (currentFuel < 0)
                    break
                
                combinedFuel += currentFuel
                currentMass = currentFuel
            }

            return combinedFuel
        }
    }

}