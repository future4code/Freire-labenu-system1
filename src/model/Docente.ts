import { User } from "./User";

export class Docente extends User{
    constructor(name:string,email: string, dataNascimento:string,idTurma:string, id:string){
        super(name,email,dataNascimento,idTurma,id)

}
}