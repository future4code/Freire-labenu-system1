import { DocentData } from "../data/DocentData"
import { EmailAlreadyRegistered } from "../error/EmailAlreadyRegistered"
import { InvalidGang } from "../error/IvalidGang"
import { MissingField } from "../error/MissingFields"
import moment from "moment"
import { StudentModel } from "../model/Student"
import { GangData } from "../data/GangData"

export class CreateDocente {
async criar(req: Request, res: Response){
    try {
        const { name, email, dataNascimento, idTurma } = req.body

        if (!name || !email || !dataNascimento || !idTurma) {
            throw new MissingField()
        }

        const docentData = new DocentData()
       
        const emailExist = await docentData.searchDocentByEmail(email)

        if (emailExist) {
            throw new EmailAlreadyRegistered()
        }

        const idGangExist = await GangData.searchClassById(idTurma)

        if(!idGangExist.length){
            throw new InvalidGang()

        }

        const dataConvertida = moment(dataNascimento, "DD/MM/YYYY").format("YYYY-MM-DD")

        const id = Date.now().toString()

        const student = new StudentModel(name, email, dataConvertida, idTurma,id)

        const response = await docentData.createDocente(student)
        res.status(201).send({message: response})


    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage })
    }

}

}