import IOpCode from "../models/OpCodes/IOpCode";
import AddOpCode from "../models/OpCodes/AddOpCode";
import MultiplyOpCode from "../models/OpCodes/MultiplyOpCode";

export function getOpCodes(): IOpCode[] {
    return [
        new AddOpCode(),
        new MultiplyOpCode()
    ]
}
