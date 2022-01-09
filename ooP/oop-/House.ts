class House {
  owner: string; // the house owner name

  wallColor: string;
  windowsNumber: number = 5;
  doorsNumber: number = 1;
  treeNumber: number = 2;
  stairsNumber: number = 2;

  hasRoof: boolean = false;

  constructor(owner: string, wallColor: string) {
    this.owner = owner;
    this.wallColor = wallColor; // can be RED or WHITE only
  }
  // isHouse(){
  //   console.log(${this.owner})
  // }
}

let house1 = new House("Chanry", "White");
house1.windowsNumber = 1;
// isHouse();