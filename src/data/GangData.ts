import { Turma } from "../model/Turma";
import { BaseDataBase } from "./connection";

export class GangData extends BaseDataBase {

    async createGang(turma: Turma): Promise<string> {

        await this.getConnection().insert({

            id: turma.getId(),
            name: turma.getName()

        }).into("turma")

        return `turma ${turma.getName()} criada com sucesso`

    }

    async selectClassesActive():Promise<Turma[]> {
        const result = await this.getConnection().select("*").from("turma").where("modulo", ">", 0)
        const allClasse = result.map((turma)=>{
           return new Turma(turma.name, turma.id, turma.modulo)
        })

        return allClasse
    }

    async changeModule(id:string, module:number):Promise<string>{
        await this.getConnection().update({module}).into("turma")
        .where({id})

        return `The module was successfully changed`
    }

    async searchClassById(id:string){
     const result = await this.getConnection().select("*").from("turma").where({id})

        return result
    }
}