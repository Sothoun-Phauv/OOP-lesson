import { Address } from "./Address";
import { Customer } from "./Customer";
import { DateTime } from "./DateTime";

export class Trip {
  busName: string;
  customers: Customer[] = [];

  departurePlace: Address;
  arrivalPlace: Address;
  departureDate: DateTime;
  arrivalDate: DateTime;

  constructor(
    busName: string,
    departurePlace: Address,
    arrivalPlace: Address,
    departureDate: DateTime,
    arrivalDate: DateTime
  ) {
    this.busName = busName;
    this.departurePlace = departurePlace;
    this.arrivalPlace = arrivalPlace;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  setDeparture(place: Address, date: DateTime) {
    this.departurePlace = place;
    this.departureDate = date;
  }

  setArrival(place: Address, date: DateTime) {
    this.arrivalPlace = place;
    this.arrivalDate = date;
  }
}
