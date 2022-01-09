import { NamedResource } from "../NamedResource";
export class Room implements NamedResource {
  constructor(protected name: string) {}

  getName() {
    return this.name;
  }
}
