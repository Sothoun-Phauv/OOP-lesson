import { Address } from "./Address";

export class Customer {
  firstname: string; // mandatory
  lastname: string; // mandatory
  address?: Address; // optional

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  setAddress(address: Address) {
    this.address = address;
  }
}
