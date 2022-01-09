import { Person } from "./person";


export class Cleaner extends Person{
    private salary:number
    private workTime:string
    
    constructor(salary:number, workTime:string, name:string, address:string, age:number, phone:string, gender:string){
        super(name,address, age, phone, gender)
        this.salary = salary
        this.workTime = workTime
        
    }

    getSalary(){
        return this.salary
    }
    getName(){
        return this.name
    }
}