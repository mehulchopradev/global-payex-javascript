// Create an Account class
// Every Account object should have attributes name, type, balance
// On every Account object, call following methods
  // withdraw - return the updated balance
  // deposit - return the updated balance

export default class Account {

  static minBalance = 1000;

  constructor(name, type, balance) {
    this.name = name;
    this.type = type;
    this.balance = balance;
  }

  withdraw(amt) {
    if (this.balance - amt < Account.minBalance) {
      // throw an exception to the ur caller
      // throwing an exception causes an early return from the function
      throw new Error('Cannot withdraw as balance going below 1000');
    }

    this.balance = this.balance - amt;
    return this.balance;
  }

  deposit(amt) {
    this.balance += amt;
    return this.balance;
  }
}