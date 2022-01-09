

export abstract class  Person{
    protected name:string
    protected address:string
    protected age:number
    protected phone:string
    protected gender:string
    constructor(name:string, address:string, age:number, phone:string, gender:string) {
        this.name = name
        this.address = address
        this.age = age
        this.phone = phone
        this.gender = gender
    }

    displayInformation(){
        return this.name 
    };
}