class Account {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  setNameToRonan() {
    this.name = "ronan";
  }
}

let sara = new Account("sara");

sara.setNameToRonan();

console.log(sara.getName());
