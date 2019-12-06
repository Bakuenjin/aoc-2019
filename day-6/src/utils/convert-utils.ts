import SpaceObject from "../models/SpaceObject"

export function convertDataToStringMap(orbitDataList: string[]): Map<String, String> {
    const spaceObjects: Map<String, String> = new Map()

    let parentID: string
    let objectID: string

    orbitDataList.forEach(orbitData => {
        parentID = orbitData.split(')')[0]
        objectID = orbitData.split(')')[1]
        spaceObjects.set(objectID, parentID)
    })

    return spaceObjects
}

export function convertDataToSpaceObjectMap(orbitDataList: string[]): Map<String, SpaceObject> {
    const spaceObjects: Map<String, SpaceObject> = new Map()

    let parentID: string
    let objectID: string

    let currentParent: SpaceObject | undefined
    let currentObject: SpaceObject | undefined

    orbitDataList.forEach(orbitData => {
        parentID = orbitData.split(')')[0]
        objectID = orbitData.split(')')[1]

        currentParent = spaceObjects.get(parentID)
        currentObject = spaceObjects.get(objectID)

        if (!currentParent) {
            currentParent = new SpaceObject(parentID)
            spaceObjects.set(parentID, currentParent)
        }

        if (!currentObject)
            currentObject = new SpaceObject(objectID)

        currentObject.setParent(currentParent)
        currentParent.addChildren(currentObject)
        spaceObjects.set(objectID, currentObject)
    })

    return spaceObjects
}