var BankAccount = /** @class */ (function () {
    function BankAccount(name) {
        this.names = name;
        this.balance = 0;
    }
    BankAccount.prototype.credit = function (valueDollars) {
        return this.balance += valueDollars;
    };
    BankAccount.prototype.debit = function (valueDollars) {
        return this.balance -= valueDollars;
    };
    return BankAccount;
}());
var thonAccount = new BankAccount('Thon Py');
// thonAccount.names = 'Thon Py'
thonAccount.balance = 100;
thonAccount.credit(100);
thonAccount.debit(10);
console.log(thonAccount.names + ", your account balance is" + thonAccount.balance);
thonAccount.credit(400);
console.log(thonAccount.names + ", your account balance is" + thonAccount.balance);
