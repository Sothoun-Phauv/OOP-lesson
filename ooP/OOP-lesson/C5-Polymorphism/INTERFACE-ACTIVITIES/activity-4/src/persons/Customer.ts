import { Person } from "./Person";

export class Customer extends Person {
  private compagnyName: string;

  constructor(name: string, compagnyName: string) {
    super(name);
    this.compagnyName = compagnyName;
  }
}
