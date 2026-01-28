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



// login validation condition
const crtname="admin";
const crtpass="12345";

let username="admin";
let userpass="12345"

if(username===crtname && crtpass===crtpass){
    console.log("Login succesfully"); 
}
else{
    console.log("invalid password or user name");
    
}

//  role based access system 
let role="student";
switch (role) {
    case "trainer":
        console.log("acces to allow for trainer");
        break;
    case "student":
        console.log("acces to allow for student");
        break;
    case "Worker":
        console.log("acces to allow for student");
        break;
    default:
        console.log("No access");
              
}


// discount
let totalAmount = 3500;

if (totalAmount >= 5000) {
    console.log("You get 20% discount");
} else if (totalAmount >= 3000) {
    console.log("You get 10% discount");
} else if (totalAmount >= 1000) {
    console.log("You get 5% discount");
} else {
    console.log("No discount available");
}