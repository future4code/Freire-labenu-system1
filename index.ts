import { app } from "./app"
import { BaseDataBase } from "./src/data/connection"
import gang from "./src/endpoints/CreateGang"
import Student from "./src/endpoints/CreateStudent"

app.get("/showTables", async(req,res)=>{

    const base = new BaseDataBase()

    const show = await base.getConnection().raw(`SHOW TABLES`)

    res.send(show)
})

//ENDPOINTS

const turma = new gang()
const student = new Student()
app.post("/createGang", turma.create)
app.get("/search-active-classes", turma.active)
app.post("/changeModule",turma.module)
app.post("/createStudent", student.criar)