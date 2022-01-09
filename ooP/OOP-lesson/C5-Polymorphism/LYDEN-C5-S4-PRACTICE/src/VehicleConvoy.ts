 import { Vehicle } from "./Vehicle";
export class VehicleConvoy {
    private vehicles: Vehicle[]=[]
    addVehicle(vehicle:Vehicle){
        this.vehicles.push(vehicle)
    }
    getMaxSpeed():number{
        let maxSpeed = this.vehicles[0].getSpeed();
        for(let vehicle of this.vehicles){
            if(maxSpeed>vehicle.getSpeed()){
                maxSpeed = vehicle.getSpeed();
            }
        }
        return maxSpeed;
    }
}