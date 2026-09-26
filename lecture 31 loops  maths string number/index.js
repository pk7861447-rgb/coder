// for(let i=1; i<20; i++){
//   console.log("hello");
// }
  
// let num=15
// for(
//     let i=1; i<=10 ; i++
// ){
//     console.log(num*i);
// }

// let alokMarks=46+45+78
// let addiMarks=34+56+78
// let karan = 45+98+76
// let anu =45+89+76

// function totalMarks(){
//     console.log("hello")
// }
// totalMarks()



// et alokMarks = 46 + 56 + 23;
// let addiMarks = 24 + 24 + 42;
// let karan = 54 + 23 + 65;
// let anu = 54 + 52 + 23;

// let productPrice = 3000;
// let discountAmount = 3000 * 50 / 100;
// let deliveryCharge = 50;
// let totalAmount = productPrice - discountAmount + deliveryCharge

// function totalMarks(studentName, mathMarks, scienceMarks, sanskritMarks) {
//     console.log(`${studentName } total marks : ` ,mathMarks + scienceMarks + sanskritMarks);
// }

// totalMarks("Alok", 46, 56, 23)
// totalMarks("Addi", 24, 24, 42)
// totalMarks("Karan", 54, 23, 65)
// totalMarks("Anu", 54, 52, 23)



// function greetingMsg(userName = "Guest", greetings = "Hii"){
//     // console.log(`${greetings}, ${userName}`);
//     console.log(`${greetings}, ${userName}`);
//     // console.log(greetings + " " +userName );
// }

// greetingMsg("Priyanshu")
// greetingMsg("Anshika" )
// greetingMsg("Satyam" , "Ki hal hai" )
// greetingMsg("Saif")



// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);
//     }
// }

// calculator(4 , 5 , "-")



// function totalMarks( mathMarks, scienceMarks, sanskritMarks) {
//     return mathMarks + scienceMarks + sanskritMarks;
// }

// function calPercentage(studentName, mathMarks, scienceMarks, sanskritMarks){
//     let total = totalMarks(mathMarks, scienceMarks, sanskritMarks);
//     let percentage = (total / 300) * 100
//     console.log(`${studentName} percentage : ${percentage}` );
//     return percentage
// }

// let percentage = calPercentage("Alok", 46, 56, 23)
// console.log(percentage);


// totalMarks("Alok", 46, 56, 23)
// totalMarks("Addi", 24, 24, 42)
// totalMarks("Karan", 54, 23, 65)
// totalMarks("Anu", 54, 52, 23)


// fun1()
// function fun1(){
//     console.log("function declaration");
// }

// console.log(add(5, 7));
let add = function (num1, num2) {
    return num1 + num2
}


// arrow function

// syntax 1
let add = num1 =>  num1 + 4;

// syntax 2
let add = (num1 , num2) => num1 + num2;

// // synatax 3
// let add = (num1 , num2) => {
//     // something
//     // something
//     return num1 + num2
// };



// console.log(add(





// maps filtering:


let product = ["laptop",
"mobile", "headphone"];

let result = product.map(function(product){
  console.log(product.toUpperCase());
console.log(result);



let products = ["laptop",
"mobile", "headphone"];


let prices = [100, 299,300];

let result = prices.map(function(price){
    return "$"+price;

});
console.log(result);





3.


// Input:
let users=[
 { name: "Rahul", email: "rahul@example.com" },
 { name: "Priya", email: "priya@example.com" }
];

// let names=Users.map (funcution(user){
//     return user.name;
// });
// console.log(names);


let newName=users.map((user))=>{
    return user.name;
});
console.log(newName)


let users=[
 { name: "Rahul", email: "rahul@example.com" },
 { name: "Priya", email: "priya@example.com" }
];


let newName = users.map((user) => { return user.name; }); 
console.log(newName);


Create an array of product prices. Use map() to create a new array where every price is increased by
10%. Keep the original array unchanged.
Example:

Input:
[100, 200, 300]


let prices= [100, 200, 300];

let price=prices.map((price) => {return prices*100/10;});
console.log(price);


let prices = [100, 200, 300];

let price = prices.map((price) => { return price * 100 / 10; });
console.log(price); 
// Output: [1000, 2000, 3000]




let prices = [100, 200, 300];

let price = prices.map(price => price * 100 / 10);
console.log(price); 
// Output: [1000, 2000, 3000]



Create an array of user objects with name and role. Use map() and the spread operator to create a new
array where the role of every user is changed to "developer" without modifying the original array.
Example:
Input:
[
 { name: "Rahul", role: "student" },
 { name: "Priya", role: "student" }
]
Output:
[
 { name: "Rahul", role: "developer" },
 { name: "Priya", role: "developer" }
]


let roles=[
 { name: "Rahul", role: "student" },
 { name: "Priya", role: "student" }
];

let role=roles.map((role) => {return{ role:"developer"};})
console.log(role);

let price = prices.map((price) => { return price * 100 / 10; });
console.log(price); 



6. Add a New Property Using map()
Create an array of product objects containing name and price. Use map() to create a new array where
each product also has an inStock property with the value true.
Example:
Input:
[
 { name: "Laptop", price: 50000 },
 { name: "Mouse", price: 500 }
]
Output:
[
 { name: "Laptop", price: 50000, inStock: true },
 { name: "Mouse", price: 500, inStock: true }
]


let products[
 { name: "Laptop", price: 50000 },
 { name: "Mouse", price: 500 }
]



let stockStatus = products.map((product) => { 
    return { instock: true };
});


let products = [ { name: "Laptop", price: 50000 }, { name: "Mouse", price: 500 } ]; 
// let product = products.map((product) => { return { instock: true }; }); 
// console.log(products);

let product=products.map((product)=>{ return {product,instock:"true"};});
console.log(product);

let products = [ 
  { name: "Laptop", price: 50000 }, 
  { name: "Mouse", price: 500 } 
]; 

// No spread operator used here
let updatedProducts = products.map((product) => { 
  return { instock: "true" }; 
});

console.log(updatedProducts);
// Output: [ { instock: 'true' }, { instock: 'true' } ]



let products = [ 
  { name: "Laptop", price: 50000 }, 
  { name: "Mouse", price: 500 } 
]; 

// 1. Save to a new variable (updatedProducts)
// 2. Use ...product to copy the existing name and price
let updatedProducts = products.map((product) => { 
  return { ...product, inStock: "true" }; 
});

console.log(updatedProducts);




7. Display Technologies Using forEach()
Create an array of frontend technologies and use forEach() to display every technology.
Example:
Input:
["HTML", "CSS", "JavaScript"]
Output:
HTML
CSS
JavaScript


let newArr=
["HTML", "CSS", "JavaScript"]

newArr.forEach(function (newArr) {
    console.log(newArr);
});


8. Create a New Array Using map()
Using the same array of frontend technologies, use map() to create a new array where every technology
is converted to uppercase.
Example:
Input:
["html", "css", "javascript"]
Output:
["HTML", "CSS", "JAVASCRIPT"]

// let upper = newArrs.map((newArr) => {
//   return newArr.toUpperCase();
// });

let newArrs=["html", "css", "javascript"]


// let upper = newArrs.map((newArr) => {
//   return newArr.toUpperCase();
// });


let upper=newArrs.map((newArr) =>{return newArr.toUpperCase();});
console.log(upper);



// let newArrs=["html", "css", "javascript"]

// let upper=newArrs.map((newArr) =>{return newArr.uppercase});
// console.log(newArr)
// let product=products.map((product)=>{ return {product,instock:"true"};});
// // console.log(product);




9. Format User Names Using map()
Create an array of names and use map() to add the text "User: " before every name. Display the new
array.
Example:
Input:
["Rahul", "Priya", "Aman"]
Output:
["User: Rahul", "User: Priya", "User: Aman"]

// const formattedNames = names.map((name) => {
//   return "User: " + name;
// });


// let names=["Rahul", "Priya", "Aman"]

let name=names.map((name) =>{  return `User: ${name}`;
});

console.log(name)


10. Filter Available Products
Create an array of product objects containing name and inStock. Use filter() to create a new array
containing only the products that are in stock.
Example:
Input:
[
 { name: "Laptop", inStock: true },
 { name: "Mouse", inStock: false }
]
Output:
[
 { name: "Laptop", inStock: true }
]

[
 { name: "Laptop", inStock: true },
 { name: "Mouse", inStock: false }
]


let newArr=[
 { name: "Laptop", inStock: true },
 { name: "Mouse", inStock: false }
]


let products=newArr.filter((product)=>{
    return product.inStock===true;
});
console.log(products)


let products = newArr.filter((product) => {
    return product.inStock === true;
});


1. Print Numbers
Write a program to print numbers from 1 to 10 using a for loop.
2. Print Even Numbers
Write a program to print all even numbers from 1 to 20.
3. Print Odd Numbers
Write a program to print all odd numbers from 1 to 20.
4. Reverse Counting
Write a program to print numbers from 10 to 1 using a loop.
5. Sum of Numbers
Write a program to calculate the sum of numbers from 1 to 10.
6. Multiplication Table
Take a number and print its multiplication table up to 10.





for (let i=1; i<=11; i++){
    console.log(i);
}
for (let i=2; i<=11; i+=2){
console.log(i);
}


// Loop from 1 to 20, incrementing by 2 to get even numbers
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// Loop from 1 to 20, incrementing by 2 to get even numbers
for (let i = 10; i<=1; i-- ) {
    console.log(i);
}

// Loop from 1 to 20, incrementing by 2 to get even numbers
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// Loop from 1 to 20, incrementing by 2 to get even numbers
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


let sum = 0;

// Add each number from 1 to 10 to the sum variable
for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum:", sum); // Output: 55


let num = 5; // Change this to any number you want

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


console.log





7. Basic while Loop
Write a program to print numbers from 1 to 10 using a while loop.
8. Sum of Even Numbers
Write a program to calculate the sum of all even numbers from 1 to 20.
9. Stop the Loop Using break
Write a program using a while loop to print numbers from 1 onwards, but stop the loop when the
number reaches 6 using the break statement.
Expected Output: 1 2 3 4 510. Skip a Number
Print numbers from 1 to 10, but skip the number 5 using the continue statement.


let i = 1;

// The loop runs as long as the condition (i <= 10) is true
while (i <= 10) {
    console.log(i);
    i++; // Don't forget to increment, or the loop will run forever!
}

let i=1;
while(i<=10){
    console.log(i);
    i++;
}


let sum = 0;

// Loop through numbers 1 to 20
for (let i = 1; i <= 20; i++) {
    // Check if the number is even using the remainder/modulo operator (%)
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("Sum of even numbers:", sum); // Output: 110
let sum = 0;

// Loop through numbers 1 to 20
for (let i = 1; i <= 20; i++) {
    // Check if the number is even using the remainder/modulo operator (%)
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("Sum of even numbers:", sum); // Output: 110


let  sum=0;



let num = 1;

while (true) { // 'while(true)' creates an intentional infinite loop
    if (num === 6) {
        break; // Exits the loop immediately when num hits 6
    }
    console.log(num);
    num++;
}

let num =1 ;
while (true){
    if (num===6){
        break;
    }
console.log(num);
num++;
}

for (let i = 1; i <= 10; i++) {
    // If the number is 5, skip the rest of the loop code and go to the next iteration
    if (i === 5) {
        continue;
    }
    console.log(i);
}


let i = 1;

while (i <= 10) {
    if (i === 5) {
        i++; // Increment first so the loop doesn't get stuck on 5
        continue; // Skip the console.log and jump to the next turn
    }
    
    console.log(i);
    i++; // Normal increment for all other numbers
}

11. Function with a Parameter
Create a function named greetUser(name) that takes a name as a parameter and displays a greeting
message.
Example:
Input: Rahul
Output: Hello, Rahul
12. Add Two Numbers
Create a function that takes two numbers as parameters and returns their sum.
13. Even or Odd Function
Create a function that takes a number and checks whether it is even or odd.
14. Square of a Number
Create a function that takes a number and returns its square.
15. Largest of Two Numbers
Create a function that takes two numbers and returns the greater number.
16. Calculate Total Price
Create a function named calculateTotal(price, quantity) using a function declaration. The function
should calculate and display the total price.
Example:
Input: price = 100, quantity = 3
Output: Total Price: 300



const title = "Inception";
const year = 2010;

// Traditional
// const movieOld = { title: title, year: year };

// ES6 Shorthand
const movieNew = { title, year };





const user = { id: 101, username: "dev_guy", location: "New York" };

// Basic destructuring with renaming and default values
const { username, location: city, status = "active" } = user;

console.log(username); // "dev_guy"
console.log(city);     // "New York" (renamed)
console.log(status);   // "active" (fallback applied)