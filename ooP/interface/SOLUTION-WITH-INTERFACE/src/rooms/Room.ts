import {NamedRessource} from "../NamedResource"
export class Room implements NamedRessource {
  constructor(protected name: string) {}

  getName() {
    return this.name;
  }
}
