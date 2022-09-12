import { BaseError } from "./BaseError"

export class ModuleNotPermit extends BaseError{
    constructor(){
        super("The module can only be between 1 and 6",401)
    }
}