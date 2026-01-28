// Student Marksheet (2D array)
const marksheet=[
    ["guna",89,89,90,78],
    ["balu",89,89,90,78],
    ["balaji",89,89,90,78],
    ["bala",89,89,90,78]
];
marksheet.forEach(student =>{
    const name = student[0];
    const marks = student.slice(1);
    const total = marks.reduce((sum,m)=> sum+m,0);

    console.log(`name:${name}, total:${total}`);
    
    
    
})

// Matrix Addition Program

let a =[
    [1,2],
    [1,4]
];
let b =[
    [1,2],
    [1,4]
];
let sum =[
    [0,0],
    [0,0]
];


for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    sum[i][j] = a[i][j] + b[i][j];
  }
}

console.log(sum);

// Seating Arrangement Chart

// Game Board Representation

// Weekly Expense Tracker (2D array)



