abstract class Operation {
  constructor(public number1: number, public number2: number) {}

  abstract doOperation(): number;
}

class AddOperation extends Operation{
    constructor(number1: number, number2: number){
      super(number1, number2);
    }
    doOperation(){
      return this.number1 + this.number2;
    } 
}

class MultiplyOperation extends Operation{
    constructor(number1: number, number2: number){
      super(number1, number2);
    }
    doOperation(){
      return this.number1 * this.number2;
    }
}

let number1 = new AddOperation(1,1);
let number2 = new MultiplyOperation(2,2);
console.log(number1.doOperation());
console.log(number2.doOperation());

