import { NamedResource } from "../NamedResource";
export abstract class Person implements NamedResource {
  constructor(protected name: string) {}

  getName(): string {
    return this.name;
  }
}
