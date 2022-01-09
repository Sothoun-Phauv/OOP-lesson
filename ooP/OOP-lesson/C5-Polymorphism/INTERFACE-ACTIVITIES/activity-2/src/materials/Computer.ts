import { Material } from "./Material";

export class Computer extends Material {
  private name: string;

  constructor(id: number, computerName: string) {
    super(id);
    this.name = computerName;
  }

  getName(): string | null {
    return this.name;
  }
}
