// Student Marks Analyzer (array + reduce)

let mark=[78,89,78,90,78]

let total=mark.reduce((sum,mark)=> sum+mark,0)

console.log("marks",total);


// Even/Odd Number Filter App

let Number=[1,2,3,4,5,6,7,8,9,10]

let evenNumbers=Number.filter(num => num % 2 ==0);
let oddNumbers=Number.filter(num=> num % 2 !=0);

console.log("EvenNumber :",evenNumbers);
console.log("OddNumber :",oddNumbers);


// Product Price Calculator using map

const products = [
  { name: "Mobile", price: 15000 },
  { name: "Laptop", price: 50000 },
  { name: "Headset", price: 2000 }
];


const updatedProducts = products.map(product => {
  return {
    name: product.name,
    price: product.price,
    priceWithGST: product.price + product.price * 0.18
  };
});

console.log(updatedProducts);


// Search Students Above Certain Marks

let Student=[
    {nam:"guna",marks:89},
    {nam:"balu",marks:99},
    {nam:"bala",marks:79},
    {nam:"balaji",marks:45},
    {nam:"aku",marks:43},
    {nam:"yash",marks:25},

]

let Students=Student.filter(Student=>Student.marks >50)
console.log("Below mentionedf student are above 50");
console.log("Student name:",Students);



// Shopping Cart Total Calculator