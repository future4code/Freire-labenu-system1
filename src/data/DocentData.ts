import { Docente } from "../model/Docente";
import { BaseDataBase } from "./connection";

export class DocentData extends BaseDataBase{

    async createDocente(docent:Docente){
        await this.getConnection().insert({
            id: docent.getId(),
            name:docent.getName(),
            email:docent.getEmail(),
            data_nascimento:docent.getDataNascimento(),
            turma_id:docent.getIdTurma(),
       }).into("docente")

       return `Professor com nome ${docent.getName()} criado com sucesso`
    }
    async searchDocentByEmail(email:string){
        const result = await this.getConnection()
        .select("*")
        .from("Docente")
        .where({email})

        return result[0]
    }
}