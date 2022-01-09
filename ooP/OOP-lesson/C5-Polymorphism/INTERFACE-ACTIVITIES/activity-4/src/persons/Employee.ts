import { Person } from "./Person";

export class Employee extends Person {
  private salary: number;

  constructor(name: string, salary: number) {
    super(name);
    this.salary = salary;
  }
}
