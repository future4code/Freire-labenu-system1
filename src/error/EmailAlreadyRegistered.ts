import { BaseError } from "./BaseError";

export class EmailAlreadyRegistered extends BaseError{
    constructor (){
        super("Email is already registered", 401)
    }
}