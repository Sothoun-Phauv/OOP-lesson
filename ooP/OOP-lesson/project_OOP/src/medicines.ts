

export class Medicines{
    private name:string
    private dosage:string
    private numberOfMedicines:number

    constructor(name:string, dosage:string, nbOfMedicines:number){
        this.name = name
        this.dosage = dosage
        this.numberOfMedicines = nbOfMedicines
    }

    getMedicines(){
        return this.name + this.dosage + this.numberOfMedicines
    }
} 