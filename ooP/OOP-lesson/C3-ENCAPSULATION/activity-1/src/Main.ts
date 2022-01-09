import { Drink } from "./Drink";
import { Coffee } from "./Coffee";
import { OrangeJuice } from "./OrangeJuice";

let coffee = new Coffee('Amazon Cafe', 2, 20);
let orange = new OrangeJuice('Juice Juice', 3, 30);

console.log(coffee.getDrink());
console.log(orange.getDrink());

