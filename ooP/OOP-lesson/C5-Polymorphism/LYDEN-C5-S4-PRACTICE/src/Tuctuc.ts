import { Vehicle } from "./Vehicle";
export class Tuctuc extends Vehicle {
    private nbCustomers : number;
    constructor(plateID:string,weight:number, nbCustomers: number) {
        super(plateID, weight);
        this.nbCustomers = nbCustomers;
    }
    getSpeed(): number{
        let speed = 130;
        for (let number = 0; number < this.nbCustomers; number++){
            speed -= 5;
        }
        return speed;
    }
}