import { Request } from "express"
import { Response } from "express"
import { GangData } from "../data/GangData"
import { ModuleNotPermit } from "../error/ErrorNotPermit"
import { MissingField } from "../error/MissingFields"
import { Turma } from "../model/Turma"


export default class gang{

    async create(req:Request, res:Response){
        try{
            const {name}= req.body
            if (!name){
                throw new MissingField()
            }

            const turma = new Turma(name)
            const gangData = new GangData()

           const response = await gangData.createGang(turma)
           res.status(201).send(response)


        }catch(error:any){
            res.status(error.statusCode || 500).send({message:error.message || error.sqlMessage})
        }
    }

    async active(req:Request, res:Response){
        try {
            const gangData = new GangData()
            const gangActive = await gangData.selectClassesActive()

            res.status(200).send(gangActive)
          
        } catch(error:any){
            res.status(error.statusCode || 500).send({message:error.message || error.sqlMessage})
        }
    }

    async module(req:Request, res:Response){
        try {
            const id= req.params.id
            const {module} = req.body

            if(!module){
                throw new MissingField()
            }

            if(module < 0 || module > 6){
                throw new ModuleNotPermit()
            }

            const gangData = new GangData()

            const response = await gangData.changeModule(id, module)

            res.status(200).send(response)

      
        } catch(error:any){
            res.status(error.statusCode || 500).send({message:error.message || error.sqlMessage})
        }
    }




}
