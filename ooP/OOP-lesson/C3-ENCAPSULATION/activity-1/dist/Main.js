"use strict";
exports.__esModule = true;
var Coffee_1 = require("./Coffee");
var OrangeJuice_1 = require("./OrangeJuice");
var coffee = new Coffee_1.Coffee('Amazon Cafe', 2, 20);
var orange = new OrangeJuice_1.OrangeJuice('Juice Juice', 3, 30);
console.log(coffee.getDrink());
console.log(orange.getDrink());
