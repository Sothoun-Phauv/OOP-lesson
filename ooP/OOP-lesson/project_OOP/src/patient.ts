import { Dianose } from "./diagnose";
import { Person } from "./person";

export class Patient extends Person{
    private id:string
    private birthOfDate:string
    private diag:Dianose[] =[]
    constructor(name:string, address:string, age:number, phone:string, gender:string, id:string, birthOfDate:string){
        super(name, address, age, phone, gender)
        this.id = id
        this.birthOfDate = birthOfDate
    }
    getName():string{
        return this.name
    }
    getAge():number{
        return this.age
    }
    addDiag(diag:Dianose){
        return this.diag.push(diag);
    }

}