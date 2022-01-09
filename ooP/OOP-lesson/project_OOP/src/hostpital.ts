import { material } from "./material";
import { Patient } from "./patient";
import { Staff } from "./staff"

export class Hostpital{
    private name:string
    private address:string
    private phone:string
    private staff:Staff[] = [];
    private patient:Patient[]=[];
    private material:material[]=[];
    constructor(name:string, address:string, phone:string){
        this.name = name
        this.address = address
        this.phone = phone
    }
    displayDetail(){
        return "Name:" + this.name + " Address: " + this.address + " Phone: " + this.phone
    }
    addPatient(patient:Patient){
        return this.patient.push(patient);
    }
    addStaff(staff:Staff){
        return this.staff.push(staff);
    }
    addMeterial(mater:material){
        return this.material.push(mater);
    }
}