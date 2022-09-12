export class Turma{
    private id:string | undefined = Date.now().toString()
    private name:string | undefined
    private module:string | undefined

    constructor(id?:string, name?:string, module?:string){
        this.name = name;
        this.id = id;
        this.module = module;
    }

    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    
}

