import { Request } from "express";
import { Response } from "express";
import { GangData } from "../data/GangData";
import { StudentData } from "../data/StudentData";
import { EmailAlreadyRegistered } from "../error/EmailAlreadyRegistered";
import { InvalidGang } from "../error/IvalidGang";
import { MissingField } from "../error/MissingFields";
import moment from "moment"
import { StudentModel } from "../model/Student";

export default class Student {

    async criar(req: Request, res: Response) {

        try {
            const { name, email, dataNascimento, idTurma } = req.body

            if (!name || !email || !dataNascimento || !idTurma) {
                throw new MissingField()
            }

            const studentData = new StudentData()
            const gangData = new GangData()
            const emailExist = await studentData.searchStudentByEmail(email)

            if (emailExist) {
                throw new EmailAlreadyRegistered()
            }

            const idGangExist = await gangData.searchClassById(idTurma)

            if(!idGangExist.length){
                throw new InvalidGang()

            }
            const id = Date.now().toString()

            const dataConvertida = moment(dataNascimento, "DD/MM/YYYY").format("YYYY-MM-DD")

            const student = new StudentModel(name, email, dataConvertida, idTurma,id)

            const response = await studentData.criarEstudante(student)
            res.status(201).send({message: response})


        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }
}