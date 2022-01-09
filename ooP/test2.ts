
class BankAccount {
    balance: number
    names: string
    constructor(name: string) {
        this.names = name
        this.balance=0
    }
    credit(valueDollars: number) {
        return this.balance+=valueDollars
    }
    
  debit(valueDollars: number) {
    return this.balance-=valueDollars
  }
}

 
let thonAccount = new BankAccount('Thon Py');
// thonAccount.names = 'Thon Py'
thonAccount.balance = 100
thonAccount.credit(100)
thonAccount.debit(10)

  
  console.log(thonAccount.names + ", your account balance is" + thonAccount.balance);
  
  thonAccount.credit(400)
  
  console.log(thonAccount.names + ", your account balance is" + thonAccount.balance);