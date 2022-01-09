
abstract class Vihicle {
    protected plateID:string
    protected weight:number
    constructor(plateID:string, weight:number){
        this.plateID =  plateID
        this.weight = weight
    }
    abstract getSpeed():number;
    
}

class BatMobile extends Vihicle{
    private isBatmanHere:boolean
    constructor(isBatmanHere:boolean, plateID:string, weight:number){
        super(plateID, weight)
        this.isBatmanHere = isBatmanHere
        
    }
    getSpeed():number{
        let speed = 110
        if(this.isBatmanHere === true){
            speed = 500;
        }
        return speed
    }
}

class MiniVan extends Vihicle{
    private numberCustomers:number
    private numberLuggage:number
    constructor(numCustomers:number, numberLuggage:number, plateID:string, weight:number){
        super(plateID, weight)
        this.numberCustomers = numCustomers
        this.numberLuggage = numberLuggage
    }
    getSpeed():number{
        return 130 - ((this.numberCustomers * 10) + (this.numberLuggage *5))
    }
}

class TocToc extends Vihicle{
    numberCustomers:number
    constructor(numberCustomers:number, plateID:string, weight:number){
        super(plateID, weight)
        this.numberCustomers = numberCustomers
    }
    getSpeed():number{
        return 130 - (this.numberCustomers *5);
    }
}

class VihicleConvy {
    //private convy:Vihicle[]=[]
    constructor(private conovy:Vihicle[] =[]){}
    getMaxSpeed(){
        let lowerSpeed = 0
        for (let vehicle of this.conovy){
            for (let vehical2 of this.conovy){
                let isLowest = true;
                if(vehicle.getSpeed() > vehical2.getSpeed()){
                    isLowest = true
                }
            }
            lowerSpeed =vehicle.getSpeed();
        }
         return lowerSpeed;
    }
    
}


let batMobie = new BatMobile(false, '120ER',2903);
console.log(batMobie.getSpeed());

let minivan = new MiniVan(0,0,'134ED', 12);
console.log(minivan.getSpeed());