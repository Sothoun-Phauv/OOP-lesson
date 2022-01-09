import { Person } from "./person";


export class Security extends Person{
    private turn: string
    private salary: number
    constructor(turn:string, address:string, name:string, age:number, phone:string, gender:string, salary: number){
        super(name,address,age,phone,gender)
        this.salary = salary
        this.turn = turn
    }
    getName(){
        return this.name
    }
    getSalary(){
        return this.salary
    }
}