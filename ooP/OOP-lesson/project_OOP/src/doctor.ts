import { Dianose } from "./diagnose";
import { Person } from "./person";


export class Doctor extends Person{
    private salary:number
    private specialty:string
    private diag:Dianose[]=[]
    constructor(salary:number, specialty:string, name:string, address:string,age:number, phone:string, gender:string ){
        super(name, address, age, phone, gender)
        this.salary = salary
        this.specialty = specialty
    }

    getName(){
        return this.name
    }
    getSalary(){
        return this.salary
    }
    getSpecialty(){
        return this.specialty
    }
    addDiag(diag:Dianose){
        return this.diag.push(diag);
    }
}