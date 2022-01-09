import { Resource } from "../Resource";

export abstract class Material extends Resource {
  constructor(protected id: number) { super() }
  // abstract getName(): string | null;
}
