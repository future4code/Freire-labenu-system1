import { BaseError } from "./BaseError";

export class InvalidGang extends BaseError{
    constructor(){
        super("invalid class id",404)
    }
}