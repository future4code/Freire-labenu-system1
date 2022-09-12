export abstract class User{
   
        private id:string = Date.now().toString()
        private name:string
        private email: string
        private dataNascimento:string
        private idTurma:string
    
        constructor (name:string,email: string, dataNascimento:string,idTurma:string, id:string){
    
            this.name = name;
            this.email = email;
            this.dataNascimento = dataNascimento;
            this.idTurma = idTurma;
            this.id = id
        }
    
        getId(){
            return this.id
        }
    
        getName(){
            return this.name
        }
        getEmail(){
            return this.email
        }
        getDataNascimento(){
            return this.dataNascimento
        }
        getIdTurma(){
            return this.idTurma
        }
    
}