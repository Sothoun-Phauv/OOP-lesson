class Contract { }

abstract class Employee {
    //   private contracts: Contract[] = []; // this is intresting  only for commercials
    //   private teamMembers: Employee[] = []; // this is intresting  only for managers
    //   private skills: String[] = []; // this is intresting  only for develeppers
    constructor(private name: string) { }
    abstract getEmployeeType(): string;
    abstract getSalary(): number;

    //   getSalary(): number {
    //     if (this.employeeType === "COMERCIAL") {
    //       return this.contracts.length * 400;
    //     } else if (this.employeeType === "MANAGER") {
    //       return this.teamMembers.length * 600;
    //     } else if (this.employeeType === "DEVELOPPER") {
    //       let salary = this.skills.length * 500;

    //       if (this.skills.includes("OOP")) {
    //         salary += 2000;
    //       }
    //       return salary;
    //     }
    //     return 0; // Else we don't know
    //   }
}
class Commercial extends Employee{
    private contract: Contract[]
    constructor(name: string, contract: Contract[]) {
        super(name)
        this.contract=contract
    }
    getEmployeeType(): string{
        return 'COMMERCIAL'
    }
    getSalary(): number{
        return this.contract.length * 400
    }
}
class Manager extends Employee{
    private teamMember: Employee[]
    constructor(name: string, team: Employee[]) {
        super(name)
        this.teamMember=team
    }
    getEmployeeType(): string{
        return 'MANAGER'
    }
    getSalary(): number{
        return this.teamMember.length * 600
    }
}
class Developer extends Employee{
    private skills: string[]
    constructor(name: string, skills: string[]) {
        super(name)
        this.skills=skills
    }
    getEmployeeType(): string{
        return 'DEVELOPER'
    }
    getSalary(): number{
        let salary: number = 0
        salary += this.skills.length * 500
        if (this.skills.includes('OOP')) {
            salary+=2000
        }
        return salary
    }
}