abstract class Vehicle {
    constructor(
        private plateId: string,
        private weight: number
    ) { }
    abstract getSpeed(): number;
    toString(): string {
        return 'The Id: ' + this.plateId + ' weight: ' + this.weight
    }
}
class BatMobile extends Vehicle {
    isBatman: boolean
    constructor(plateId: string, weight: number, isBatman: boolean) {
        super(plateId, weight)
        this.isBatman = isBatman
    }
    getSpeed(): number {
        let speed: number
        if (this.isBatman) {
            speed = 500
        } else {
            speed = 110
        }
        return speed
    }
}
class Minivan extends Vehicle {
    private numberOfCustomer: number
    private numberOfLuggage: number
    constructor(id: string, weight: number, nCustomer: number, nLuggage: number) {
        super(id, weight)
        this.numberOfCustomer = nCustomer
        this.numberOfLuggage = nLuggage
    }
    getSpeed(): number {
        let speed = 130
        speed = speed - ((this.numberOfCustomer * 10) + (this.numberOfLuggage * 5))
        return speed
    }
}
class TucTuc extends Vehicle {
    private nOfCustomer: number
    constructor(id: string, weight: number, nCustomer: number) {
        super(id, weight);
        this.nOfCustomer = nCustomer
    }
    getSpeed(): number {
        let speed: number = 130
        speed = speed - (this.nOfCustomer * 5)
        return speed
    }
}
class VehicleConvey {
    vehicles: Vehicle[] = []
    addVehicle(veh: Vehicle) {
        this.vehicles.push(veh)
    }
    getMaxSpeed(): number {
        let conveySpeed = 0
        conveySpeed = this.vehicles[0].getSpeed()
        for (let allVehicle of this.vehicles) {
            let theSpeed = allVehicle.getSpeed()
            if (theSpeed < conveySpeed) {
                conveySpeed = theSpeed
            }
        }
        return conveySpeed
    }
}

let bat = new BatMobile('1002', 45, false)
let min = new Minivan('2002', 45, 2, 1)
let tic = new TucTuc('101', 2000, 5)

let vehicles = new VehicleConvey()
vehicles.addVehicle(bat)
vehicles.addVehicle(min)
vehicles.addVehicle(tic)

console.log(bat.getSpeed());
console.log(min.getSpeed())
console.log(tic.getSpeed())
console.log(vehicles.getMaxSpeed());


