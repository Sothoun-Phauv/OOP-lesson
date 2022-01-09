import { Vehicle } from "./Vehicle";
export class MiniVan extends Vehicle {
    private nbCustomers : number;
    private nbLaggage : number;
    constructor(plateID: string, weight: number, nbCustomers: number, nbLaggage: number) {
        super (plateID, weight);
        this.nbCustomers = nbCustomers;
        this.nbLaggage = nbLaggage;
    }
    getSpeed(): number{
        let speed = 130;
        for (let nbOfCustomer = 0; nbOfCustomer < this.nbCustomers; nbOfCustomer++){
            speed -= 10;
        }
        for (let nbOfLaggage = 0; nbOfLaggage < this.nbLaggage; nbOfLaggage++){
            speed -= 5;
        }
        return speed;
    }
}