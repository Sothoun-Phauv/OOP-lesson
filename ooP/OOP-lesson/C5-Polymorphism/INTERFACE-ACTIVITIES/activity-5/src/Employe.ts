class Employee {
  private name: string;
  private employeeType: string;

  constructor(name: string, employeeType: string) {
      this.name = name;
      this.employeeType = employeeType;
  }
}

interface Quality {
  getSalary(): number;
}

class Commercials extends Employee implements Quality {
  private contract: number
  constructor(name: string, employeeType: string, contract: number) {
      super(name, employeeType)
      this.contract = contract;
  }
  getSalary(): number {
      return this.contract * 400
  }
}

class Developer extends Employee implements Quality {
  private skills: string[]
  constructor(name: string, employeeType: string, skills: string[]) {
      super(name, employeeType)
      this.skills = skills
  }
  getSalary(): number {
      let salary = this.skills.length*500;
      for (let skill of this.skills) {
          if (skill === "oop" || skill === "OOP") {
              salary = (this.skills.length-1)*500
              salary += 2000
              return salary
          }
      }
      return salary;
  }
}
class Manager extends Employee implements Quality {
  private teamMembers: string[];
  constructor(name: string, employeeType: string, teamMembers: string[]) {
      super(name, employeeType)
      this.teamMembers = teamMembers
  }
  getSalary(): number {
      return this.teamMembers.length * 600;
  }
}
let dev = new Developer("Lyden","Developer",["Python","Dart","Java","Kotlin"])
console.log(dev.getSalary())

let manager = new Manager("Nita","Manager",["Lyden"]);
console.log(manager.getSalary())

let commercail = new Commercials("Bobo","Commercail",3);
console.log(commercail.getSalary());
