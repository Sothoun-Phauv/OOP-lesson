import { NamedResource } from "../NamedResource";
export abstract class Material implements NamedResource{
  constructor(protected id: number) {}
  getName():string{
    return null;
  }
}
