import { Person } from "./person";


export class Nurse extends Person{
    private specialty:string
    private salary:number
    constructor(specialty:string, salary:number, name:string, address:string, age:number, phone:string, gender:string){
        super(name, address, age, phone, gender)
        this.specialty = specialty
        this.salary = salary

    }
    getName(){
        return this.name
    }
    getSalary(){
        return this.salary
    }
}