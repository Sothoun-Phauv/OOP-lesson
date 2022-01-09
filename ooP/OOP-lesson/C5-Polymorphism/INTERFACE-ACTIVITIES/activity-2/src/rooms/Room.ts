import { Resource } from "../Resource";

export class Room extends Resource {
  constructor(protected name: string) { super() }
  getName() {
    return this.name
  }
}
