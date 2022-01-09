import { Tree } from "./Tree";

export class House {
  numberDoor: number;
  owner: string;
  tree: Tree[] = []
  
  constructor(numberDoor: number, owner: string) {
    this.numberDoor = numberDoor;
    this.owner = owner;
  }
}

