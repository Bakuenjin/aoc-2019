export default class SpaceObject {

    private _id: string
    private _parent: SpaceObject | undefined
    private _children: Map<String, SpaceObject>

    constructor(id: string, parent?: SpaceObject) {
        this._id = id
        this._parent = parent
        this._children = new Map()
    }

    get id(): string {
        return this._id
    }

    get parent(): SpaceObject | undefined {
        return this._parent
    }

    get children(): Map<String, SpaceObject> {
        return this._children
    }

    setParent(parent: SpaceObject): void {
        this._parent = parent
    }

    addChildren(...children: SpaceObject[]): void {
        children.forEach(child => this._children.set(child._id, child))
    }

    hasChildRecursive(id: string): boolean {
        let has: boolean = false

        if (this._children.has(id))
            return true

        for (let child of this._children.values()) {
            if (child.hasChildRecursive(id))
                return true
        }

        return false
    }

    distanceTo(spaceObj: SpaceObject): number {
        let distance = 0
        let originParent = this._parent
        let destinationParent = spaceObj.parent

        while(originParent) {
            if (originParent.hasChildRecursive(spaceObj._id))
                break
            
            originParent = originParent._parent
            distance++
        }

        if (!originParent)
            return -1

        while(destinationParent && destinationParent.id !== originParent.id) {
            destinationParent = destinationParent._parent
            distance++
        }

        if (!destinationParent)
            return -1

        return distance
    }

}