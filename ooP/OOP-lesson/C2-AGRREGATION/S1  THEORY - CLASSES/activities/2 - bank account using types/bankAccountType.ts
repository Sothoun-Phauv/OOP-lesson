
type BankAccount = {
  balance: number;
  name: string;
};

function credit(account: BankAccount, valueDollars: number) {
  // TODO : add the valueDollars ot the account
} 


function debit(account: BankAccount, valueDollars: number) {
   // TODO : remove the valueDollars ot the account
}



// ----------------------------------
//	TEST ZONE
// ----------------------------------

let thonAccount: BankAccount;
thonAccount = {balance: 0, name:"thon py"};

console.log(thonAccount.name + ", your account balance is" + thonAccount.balance);

credit(thonAccount, 400)

console.log(thonAccount.name + ", your account balance is" + thonAccount.balance);