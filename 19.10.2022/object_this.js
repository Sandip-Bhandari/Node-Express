function BankAccount(name, address, panCard, amount) {
  this.name = name;
  this.address = address;
  this.panCard = panCard;
  this.balance = amount;
}

BankAccount.prototype.deposit = function (amountDeposited) {
  this.balance += amountDeposited;
};

function withdraw(amountToWithdraw) {
  console.log("this is" + this);
  this.balance = this.balance - amountToWithdraw;
}

let customer1 = new BankAccount("Sharmaji", "Banaras", "XYZ", 1000);
let customer2 = new BankAccount("Mukherji", "Kolkata", "ABC", 5000);

console.log(customer2.balance);
withdraw.call(customer2, 500);
console.log(customer2.balance);

/*
console.log(customer1.balance);
customer1.deposit(2000);
console.log(customer1.balance);
customer2.deposit(12000);
console.log(customer2.balance);

console.log(customer1.name);
console.log(customer2.name);
 */

// console.log(customer1 instanceof BankAccount);
// console.log(customer1.name);
