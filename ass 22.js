// 1.Student Record Object (name, age, marks)

console.log("Student Record Object");

let Record = {
    name: "balaji",
    age: 20,
    marks:90

}
console.log(Record.name);
console.log(Record.age);
console.log(Record.marks);



// 2.Car Object with method to display details
console.log("Car Object");
let Car={
    model:"BMW-6",
    color:"red",
    year: 2004

}
console.log(Car.model);
console.log(Car.color);
console.log(Car.year);


// 3.User Profile Object with update option
console.log("User Profile Object ");

let User={
    name:"balaji",
    age:20,
    id:345678990,
    delete:"this item"

}

User.age=20;
User.name="balaji";
User.id=34567;

delete User.delete;

console.log(User);
// 4.Product Object (price update logic)

// 5.Simple Bank Account Object (deposit, withdraw)

let bank={
    name:"balaji",
    accountno:12345678,
    balance:$123456
}

console.log(bank.name);
console.log(bank.accountno);
console.log(bank.balance);



// ===============================
// Bank Account Object
// ===============================

let bankAccount = {
    owner: "balaji",
    balance: 1000, // Initial balance

    // Deposit money function
    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
        console.log("New Balance:", this.balance);
    },

    // Withdraw money function
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        } else {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
            console.log("New Balance:", this.balance);
        }
    }
};

// ===============================
// Using the Bank Account
// ===============================

bankAccount.deposit(500);   // Add money
bankAccount.withdraw(300);  // Withdraw money
bankAccount.withdraw(2000); // Try over-withdraw



