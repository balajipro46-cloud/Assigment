

// tables
console.log("tables");

function tabelnumber(value) {
    for (let x = 1; x <= 15; x++) {
        console.log(value + " x " + x + " = " + (value * x));
    }
}

tabelnumber(5);


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

  



// Menu function
function menu(choose) {  
    if (choose === "tea") {
        console.log("You have chosen Tea");

   
    } else if (choose === "coffee") {
        console.log("You have chosen Coffee");

    
    } else if (choose === "juice") {
        console.log("You have chosen Juice");

    } else {
        console.log("Invalid choice");
    }
}

menu("tea");
menu("coffee");
menu("juice");
menu("water");

