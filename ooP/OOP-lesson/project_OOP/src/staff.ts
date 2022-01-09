import { Doctor } from "./doctor";
import { Nurse } from "./nurse";
import { Person } from "./person";
import { Security } from "./security";


export class Staff extends Person {
    private doctors:Doctor[] = []
    private nurses:Nurse[] =[]
    private secs:Security[] = []
    constructor(name:string, address:string, age:number, phone:string, gender:string, private datejoin:string, private isAviable:boolean, private role:string) {
        super(name, address, age, phone, gender)
        this.datejoin = datejoin
        this.isAviable = isAviable
        this.role = role

    }
    addStaff(staff:Doctor){
        return this.doctors.push(staff)
    }
    addSecurity(sec:Security) {
        return  this.secs.push(sec);
    }
    addNurses(nurse:Nurse){
        return this.nurses.push(nurse);
    }

    isAviables(){
        if(this.isAviable === true){
            return this.name;
        }
    }
}