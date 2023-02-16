function Account() {
  let balance = 1000;

  function withdraw(amountToWithdraw) {
    balance = balance - amountToWithdraw;
  }
  function deposit(amountTodeposit) {
    balance = balance + amountTodeposit;
  }
  function getBalance() {
    return balance;
  }

  return {
    withdraw: withdraw,
    deposit: deposit,
    getBalance: getBalance,
  };
}

// console.log(Account().getBalance());
let acc = Account();
console.log(acc.balance);
console.log(acc.getBalance());
