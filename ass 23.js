
// Student Class with name & marks

class Student{
   
    constructor(name,marks){
        this.name= name;
        this.marks=marks;

    }
    
    display(){
        console.log(`Name:`,this.name);
        console.log(`marks:`,this.marks);
        
    }

}

let Studentname=new Student("guna",22);
Studentname.display()


// Vehicle → Car Inheritance example

class Vehicle{
    model;
    year;
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    display(){
        console.log(`this is oru ${this.model} and in ${this.year}'s`);    
    }
}

class Car extends Vehicle{
    brand;
    constructor(brand, model, year){
        super(model, year);
        this.brand = brand;
    }
    display(){
        console.log(`This is a ${this.brand} ${this.model} from ${this.year}.`);
    }
}

let Vehicle1 = new Vehicle("BMW", "1998");
let Vehicle2 = new Vehicle("Audi", "1997");
let car1 = new Car("BMW","bs7","1998");
let car2 = new Car("Audi","A4","2020");


Vehicle1.display();
Vehicle2.display();
car1.display();

car2.display();




// Employee Management System (basic)

class Employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;

    }
    display(){
        console.log(`Employee Management System `);
        
        console.log(
            `
            ID:${this.id}
            name:${this.name}
            salary:${this.salary}`);  
    }
}

const Employeelist = new Employee(1234,"Guna",32000)
Employeelist.display()

// Product List using array of objects

let Product=[
    {id:1,name:"mobile",price:2000},
    {id:2,name:"laptop",price:5000},
    {id:3,name:"watch",price:1000},
    

];
Product.forEach(Products=>{
    console.log(`your Products are :${Products.name} price  ${Products.price}`);
    

})

// School System using OOP concepts