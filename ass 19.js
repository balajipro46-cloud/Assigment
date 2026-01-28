// condition using login vlidation
const username="admin";
const userpass="12345";

let crtname="admin";
let crtpass="12345";

if(username===crtname && userpass===crtpass){
    console.log("Login succesfully");
    
}else{
    console.log("Incorrect username or password");
    
}

// tabel calculation
let tableNumber = 10;

for (let x = 1; x <= 10; x++) {
    console.log(tableNumber + " x " + x + " = " + (tableNumber * x));
}


// simple calculator

let num1 = 10;
let num2 = 20;
let operator = "+"; // You can change this to test other operations

if(operator === "+"){
    console.log("add:",num1 + num2);  
}
else if(operator === "-"){
    console.log("sub:",num1 - num2);
    
}
else if(operator === "*"){
    console.log("multi:",num1 * num2);
}
else if(operator === "/"){
    console.log("div:",num1 / num2);
}


// Grading System using if-else
let x =40;

if (x <=90) {
    console.log("Grade A");   
}
else if(x <=80){
    console.log("grade B"); 
}
else if(x <=70){
    console.log("grade C");  
}
else{
    console.log("you are fail");
    
}

let choise = "coffee";

switch(choise){
    case "tea":
        console.log("yuo are choose a tea");
        break;

    case "coffee":
        console.log("you are choose coffee");
        break;
    default:
        console.log("invalid choose");
        
         
        
}
