function credit(account, valueDollars) {
    // Complete this code to add valueDollars from the bank account
    return account.balance += valueDollars;
}
;
function debit(account, valueDollars) {
    // Complete this code to remove valueDollars to the bank account
    return account.balance - valueDollars;
}
// ----------------------------------
//	TEST ZONE
// ----------------------------------
var thonAccount;
thonAccount = { balance: 0, name: "thon py" };
console.log(thonAccount.name + ", your account balance is" + thonAccount.balance);
credit(thonAccount, 400);
console.log(thonAccount.name + ", your account balance is" + thonAccount.balance);
