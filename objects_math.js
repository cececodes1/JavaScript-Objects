function Account(accountNumber, owner, balance) {
    this.accountNumber = accountNumber; 
    this.owner = owner;
    this.balance = balance;
}

Account.prototype.deposit = function(amount) {
    this.balance += amount; // adds the deposit amount to the balance
    console.log(`${amount} has been deposited. New balance is: ${this.balance}`);
};

Account.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
        console.log("Insufficient funds.");
    } else {
        this.balance -= amount; // subtract the withdraw amount from the balance
        console.log(`${amount} has been withdrawn. New balance is: ${this.balance}`);
    }
};

Account.prototype.calculateInterest = function(rate, years) {
    let compoundedBalance = this.balance * Math.pow((1 + rate), years);
    console.log(`After ${years} years at an interest rate of ${rate * 100}%, the balance will be: ${compoundedBalance.toFixed(2)}`);
    return compoundedBalance;
};


let myAccount = new Account(12345, "Jane", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.calculateInterest(0.05, 5);
