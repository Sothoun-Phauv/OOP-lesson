
import { Medicines } from "./medicines"
import { Patient } from "./patient"
import { Person } from "./person"




export class Room{
    private name:string
    private isRoomAviable:boolean
    private addPatient:Patient[] =[]
    private med:Medicines[] =[]
    constructor(name:string, isRoomAviable:boolean){
        this.name = name
        this.isRoomAviable = isRoomAviable
    }

    isRoomAvaibles(patient:Patient){
        if(this.isRoomAviable === true){
            for (let patient of this.addPatient){
                this.addPatient.push(patient);
            }
            
        }
        return this.addPatient;
    }
    addMedic(med:Medicines){
        return this.med;
    }
}