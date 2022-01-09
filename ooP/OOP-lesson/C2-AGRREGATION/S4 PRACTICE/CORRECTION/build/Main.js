"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address_1 = require("./Address");
var Customer_1 = require("./Customer");
var DateTime_1 = require("./DateTime");
var Trip_1 = require("./Trip");
var paris = new Address_1.Address("Paris", "France");
var phnomPenh = new Address_1.Address("Phnom Penh", "Cambodia");
var kampot = new Address_1.Address("Kampot", "Cambodia");
var siemReap = new Address_1.Address("Sieam Reap", "Cambodia");
// CUSTOMERS -----------------------------------------
var ronan = new Customer_1.Customer("Ronan", "Ogor");
ronan.setAddress(paris);
var him = new Customer_1.Customer("Him", "Hey");
var sovanda = new Customer_1.Customer("Sovanda", "Chib");
ronan.setAddress(phnomPenh);
// TRIPS -----------------------------------------
var start = new DateTime_1.DateTime("29/10/2021", "14.30");
var end = new DateTime_1.DateTime("29/10/2021", "16.30");
var kakaTrip = new Trip_1.Trip("KAKA Bus", phnomPenh, kampot, start, end);
kakaTrip.addCustomer(him);
kakaTrip.addCustomer(sovanda);
var lyhourTrip = new Trip_1.Trip("lyhour Bus", phnomPenh, siemReap, start, end);
lyhourTrip.addCustomer(him);
lyhourTrip.addCustomer(sovanda);
lyhourTrip.addCustomer(ronan);
// TESTS !! -----------------------------------------
console.log(kakaTrip);
console.log(lyhourTrip);
