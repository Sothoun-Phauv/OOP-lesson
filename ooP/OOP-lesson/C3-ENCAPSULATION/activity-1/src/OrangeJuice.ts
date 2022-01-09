import { Drink } from "./Drink";
export class OrangeJuice extends Drink {
	private oranges: number;
    constructor(name: string, price: number, oranges: number){
        super(name, price);
        this.oranges = oranges;
    }
    getDrink():string{
        return 'Name: ' + this.name + 'Price: ' + this.price + 'Number of orange: ' + this.oranges;
    }
}