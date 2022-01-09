import { Resource } from "../Resource";

export abstract class Person extends Resource {
  constructor(protected name: string) { super() }
}
