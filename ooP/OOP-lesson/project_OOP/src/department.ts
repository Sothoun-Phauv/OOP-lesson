import { Room } from "./room"

export class Departerment{
    private name:string
    private address:string
    private timeAviable:string
    private rooms:Room[] =[]

    constructor(name:string, address:string, timeAviable:string){
        this.name = name
        this.address = address
        this.timeAviable = timeAviable
    }

    getInformation(){
        return "Name of Depaterment: "  + this.name + " Address: " + this.address + " Time Avaiable: " + this.timeAviable
    }
    addRoom(room:Room){
        return this.rooms.push(room);
    }
}