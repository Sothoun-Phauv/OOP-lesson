import { Address } from "./Address";
import { Customer } from "./Customer";
import { DateTime } from "./DateTime";
import { Trip } from "./Trip";

let paris = new Address("Paris", "France");
let phnomPenh = new Address("Phnom Penh", "Cambodia");
let kampot = new Address("Kampot", "Cambodia");
let siemReap = new Address("Sieam Reap", "Cambodia");

// CUSTOMERS -----------------------------------------
let ronan = new Customer("Ronan", "Ogor");
ronan.setAddress(paris);
let him = new Customer("Him", "Hey");

let sovanda = new Customer("Sovanda", "Chib");
ronan.setAddress(phnomPenh);

// TRIPS -----------------------------------------
let start = new DateTime("29/10/2021", "14.30");
let end = new DateTime("29/10/2021", "16.30");

let kakaTrip = new Trip("KAKA Bus", phnomPenh, kampot, start, end);
kakaTrip.addCustomer(him);
kakaTrip.addCustomer(sovanda);

let lyhourTrip = new Trip("lyhour Bus", phnomPenh, siemReap, start, end);
lyhourTrip.addCustomer(him);
lyhourTrip.addCustomer(sovanda);
lyhourTrip.addCustomer(ronan);

// TESTS !! -----------------------------------------
console.log(kakaTrip);
console.log(lyhourTrip);
