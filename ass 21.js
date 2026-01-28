
// calculator
console.log("calculator");


function add(a, b){
    return a + b;
}

function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function multi(a, b){
    return a * b;
}
function divide(a,b){
    return a/b;
}

console.log("add",add(10, 20));    
console.log("sub",(10, 20));   
console.log("multi",(10, 20));  
console.log("divide",(10, 20));

// add or even using funtion

function number(number){

if(number % 2 ===0){
    console.log(number + " is even number");  
}else{
    console.log(number + " is odd number");
    
}
}
number(2)


// factorial number

// ===============================
// Factorial Calculator
// ===============================

// Function to calculate factorial
function factorial(n) {
    let result = 1; // Start with 1

    // Loop from 1 to n
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result; // Return final result
}

// Function call
let n = 5;
console.log("Factorial of " + n + " is:", factorial(n));