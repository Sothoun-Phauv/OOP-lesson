import { Material } from "./Material";
import { NamedResource } from "../NamedResource";

export class Computer extends Material implements NamedResource {
  private name: string;

  constructor(id: number, computerName: string) {
    super(id);
    this.name = computerName;
  }

  getName(): string {
    return this.name;
  }
}
