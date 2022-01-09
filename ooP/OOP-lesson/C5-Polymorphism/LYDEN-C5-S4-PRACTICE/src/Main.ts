import { Vehicle } from "./Vehicle";
import { BatMobile } from "./BatMobile";
import { MiniVan } from "./MiniVan";
import { Tuctuc } from "./Tuctuc";
import { VehicleConvoy } from "./VehicleConvoy";

let batMan = new BatMobile("001",200,true);
let miniVan = new MiniVan("092",200,0,0);
let tucTuc = new Tuctuc("090",290,20)


let convoy = new VehicleConvoy()
convoy.addVehicle(batMan)
convoy.addVehicle(miniVan)
convoy.addVehicle(tucTuc)
console.log(convoy.getMaxSpeed())