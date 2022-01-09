class BankAccount {
  balance: number;
  name: string;

  constructor(name: string) {
    this.name = name;
    this.balance = 0;
  }

  debit(valueDollars: number) {
    this.balance -= valueDollars;
  }

  creadit(valueDollars: number) {
    this.balance += valueDollars;
  }
}


// ----------------------------------
//	TEST ZONE
// ----------------------------------

let thonAccount = new BankAccount("thon py");

console.log(thonAccount.name + ", your account balance is" + thonAccount.balance);

thonAccount.credit(400):

console.log(thonAccount.name + ", your account balance is" + thonAccount.balance);