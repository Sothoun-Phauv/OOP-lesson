class House {
  owner: string; // the house owner name

  wallColor: string;
  windowsNumber: number = 2;
  doorsNumber: number = 1;
  treeNumber: number = 0;
  stairsNumber: number = 1;

  hasRoof: boolean = true;

  constructor(owner: string, wallColor: string) {
    this.owner = owner;
    this.wallColor = wallColor; // can be RED or WHITE only
  }
}

let house1 = new House("ronan", "RED");
house1.windowsNumber = 1;
