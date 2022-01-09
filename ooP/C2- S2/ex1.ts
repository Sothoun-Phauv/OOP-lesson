class Countries{
    name:string;
    population:number;
    capitalName:string;
    currency:string;
    constructor(name:string,population:number,capitalName:string,currency:string){
        this.name = name
        this.population = population
        this.capitalName = capitalName
        this.currency = currency

    };
    getInformation(Countries){
        return " Welcome to " + countryOne.name + "," + countryOne.population + " millions people, " + "Capital " + countryOne.capitalName 
        + " and currency " + countryOne.currency +"! \n" +

         (" Welcome to " + countryTwo.name + "," + countryTwo.population + " millions people, " + "Capital " + countryTwo.capitalName 
        + " and currency " + countryTwo.currency +"! \n" +

         " Welcome to " + countryThree.name + "," + countryThree.population + " millions people, " + "Capital " + countryThree.capitalName 
        + " and currency " + countryThree.currency +"!")
    } 
}

let countryThree = new Countries("UK",80,"London","Pound");
let countryOne = new Countries("France",70,"Paris","Euro");
let countryTwo = new Countries("Cambodia",17,"Phnom Penh","Riel");

console.log(countryThree.getInformation(Countries));



