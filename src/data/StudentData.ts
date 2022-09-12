import { StudentModel } from "../model/Student";
import { BaseDataBase } from "./connection";


export class StudentData extends BaseDataBase{
    async criarEstudante(estudante:StudentModel){
        await this.getConnection().insert({
            id: estudante.getId(),
             name:estudante.getName(),
             email:estudante.getEmail(),
             data_nascimento:estudante.getDataNascimento(),
             turma_id:estudante.getIdTurma(),
        }).into("estudante")

        return `Estudante com nome ${estudante.getName()} criado com sucesso`

    }

    async searchStudentByEmail(email:string){
        const result = await this.getConnection()
        .select("*")
        .from("estudante")
        .where({email})

        return result[0]
    }

}