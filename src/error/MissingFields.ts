import { BaseError} from "./BaseError"

export class MissingField extends BaseError{
    constructor(){
        super ("Esta faltando Parametros",404)
    }
}