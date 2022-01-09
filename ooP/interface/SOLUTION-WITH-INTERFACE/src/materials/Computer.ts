import { Material } from "./Material";
import {NamedRessource} from "../NamedResource"
export class Computer extends Material implements NamedRessource {
  private name: string;

  constructor(id: number, computerName: string) {
    super(id);
    this.name = computerName;
  }

  getName(): string {
    return this.name;
  }
}
