import {NamedRessource} from "../NamedResource"
export abstract class Person implements NamedRessource {
  constructor(protected name: string) {}

  getName(): string {
    return this.getName();
  }
}
