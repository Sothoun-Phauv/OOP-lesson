import { Drink } from "./Drink";
export class Coffee extends Drink {
    private sugar: number;
    constructor(name:string, price: number, sugar: number){
        super(name, price);
        this.sugar = sugar;
    }
    getDrink():string{
        return 'Coffe name: ' + this.name + 'Price: ' + this.price + 'Number of sugar: ' + this.sugar;
    }
}