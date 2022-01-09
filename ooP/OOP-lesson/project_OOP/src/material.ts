

export class material{
    private name:string
    private typeOfMaterial:string
    constructor(name:string, typeOfMaterial:string){
        this.name = name
        this.typeOfMaterial = typeOfMaterial
    }

    getName(){
        return this.name
    }
    getTypeOfMaterial(){
        return this.typeOfMaterial
    }
}