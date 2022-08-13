import Account from "./account.js";

const a1 = new Account('mehul', 'Current', 10000);

console.log(a1.deposit(5000));

// handle the error
try {
  console.log(a1.withdraw(15000));
} catch(err) {
  console.log('its mee!');
  console.log(err);
}