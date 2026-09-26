//Arithemetic operators 

// let num1=2;
// let num2=4;

// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1/num2)
// console.log(num1*num2)
// console.log(num1%num2)


// case sensitive 

// let NAME = "Nishant"
// let Name ="juhi"
// let name ="karan"

// let num = 45;
// num+=3;
// console.log(num+=);

// let num = 45;
// num--;
// console.log(num);

// let num =45;
// console.log(--num)
// // console.log(num)

// console.log(--num);
// console.log(num--);
// console.log(num);

// let num = 2;
// num += 5;
// console.log(num);
// num -= 5;
// console.log(num);
// num *= 6;
// console.log(num)
// num %=7;
// console.log(num);
// num **=5;
// console.log(num);

// const num1 = 2;
// const num2 = 3;

// console.log(3>6)
// console.log(3<6)
// console.log(3>=6)
// console.log(3<=6)
// console.log(3==6)
// console.log(3!=6)

// // loose equality
// console.log("6"== 6);
// // strict equality
// console.log("6"=== 6);



// const age= 45;
// const hasId=true;

// const canenterpark=(age>=30 && hasId != true);
// console.log(canenterpark);


// if(true){

// }else{

// }

// let day = "fri";

// if (day === "mon") {
//     console.log("1st day of the week ");

// } else if (day === "tue") {
//     console.log("2nd day of week");
// }
// else if (day === "wed") {
//     console.log("3rd day of week");
// }
// else if (day === "thu") {
//     consolelog("4thday of week");
// }
// else if (day === "fri") {
//     console.log("5th day of week");
// }
// else {
//     console.log("wrong day");
// }


// const day = "fri";

// switch (day) {
//     case "mon":


//         console.log("1st day of the week ");
//     case "tue":
//         console.log("2nd day of week");

//     case "fri":

//         console.log("3rd day of week");


// }

// #practice

// let num = 1;
// let num = 2;

// if (num %2 ===0){
//     console.log("even");
// }else {
//    console.log ("odd");

// }


// let num = -4

// if (num ===4) {
//     console.log("positive");

// } else if (num === -4) {
//     console.log("negative");
// }
//  else if (num === 0) {
//     console.log("zero");
// }
// // if (day === "mon") {
// //     console.log("1st day of the week ");

// // } else if (day === "tue") {
// //     console.log("2nd day of week");

// let num1 =4;
// let num2=5;

// if (4<5){
// console.log("");

// }

// console.log(4<5);
// console.log(4>5);
// console.log(4===5);

// let num1 =4;
// let num2=5;
// let num2=7;


// if (num){
//     console.log("even");
// }else {
//    console.log ("odd");

// }
let age = 23;
if (age>=18){
    console.log("eligible to vote");

}else 
console.log("not eligible");


// const age >= 19;
// const hasLicense= true;

// const canirive=(age>= 20 && hasLicense = true);
// console.log(canirive);

// const age >=18;
// const hasId=true;

// const canenterpark=(age>=30 && hasId != true);
// console.log(canenterpark);


// let num = 50
// if (num>=10 & num<=100){
//     console.log("num between 10 to 100");

// }else 
// console.log("wrong");

// let marks >= 40
// let english = 44
// let hindi = 49
// let maths = 40

// if (marks>=75) {
//     console.log("Distinction");

// } else if (marks<=60) {
//     console.log("first division");
// }
//  else if (marks >= 50) {
//     console.log("second division");
// }
// else {
//     console.log("pass");
// }

// if (day === "mon") {
//     console.log("1st day of the week ");

// } else if (day === "tue") {
//     console.log("2nd day of week");



// hoMeWork assignment

const num1 = 39;
const num2 = 59;


console.log("Addition" , num1 + num2);
console.log("Substraction" , num1 - num2);
console.log("Multiplication", num1 * num2);
console.log("Divide" , num1 / num2);
console.log("Remainder" , num1 % num2);


// quest 10
let age = 18;

if (age < 0) {
    console.log("Invalid age");
} else if (age >= 18) {
    console.log("Eligible to vote");
}else {
    console.log("Not eligible to vote");
}

qu . 11 
let age = 45 ;
let hasLicense = true;


if (age < 0) {
    console.log("Invalid age");
} else if(age >= 18 && hasLicense){
    console.log("Bhai tum chala skte ho gadi");
}else {
    console.log("Beta khidhr ?? Tum nhi chala skte ho gadi");
}


let num1 = 20;
let num2 = 20;
let num3 = 30;

if (num1 >= num2 && num1 >= num3) {
    console.log("Num1 is largest");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Num2 is largest");
} else {
    console.log("Num3 is largest");
}

let percentage = 100;

// if (percentage < 0 || percentage > 100) {
//     console.log("invalid percentage");
// } else if (percentage >= 90) {
//     console.log("Grade : A");
// } else if (percentage >= 80) {
//     console.log("Grade : B");
// } else if (percentage >= 70) {
//     console.log("Grade : C");
// } else if (percentage >= 60) {
//     console.log("Grade : D");
// } else if (percentage >= 40) {
//     console.log("Grade : E");
// } else {
//     console.log("Grade : F");
// }


//

if (percentage < 0 || percentage > 100) {
    console.log("invalid percentage");
} else if (percentage >= 90 && percentage <= 100) {
    console.log("Grade : A");
} else if (percentage >= 80 && percentage <= 89) {
    console.log("Grade : B");
} else if (percentage >= 70 && percentage <= 79) {
    console.log("Grade : C");
} else if (percentage >= 60 && percentage <= 69) {
    console.log("Grade : D");
} else if (percentage >= 40 && percentage <= 59) {
    console.log("Grade : E");
} else {
    console.log("Grade : F");
}


let math = 40;
let science = 78;
let english = 59;

let total = math + science + english;

if (math < 40 || science < 40 || english < 40) {
    console.log("Result : FAIL");
} else {
    let avg = total / 3;

    if (avg >= 75) {
        console.log("Distinction");
    } else if (avg >= 60) {
        console.log("First Division");
    } else if (avg >= 50) {
        console.log("Second Division");
    } else {
        console.log("Pass");
    }
}

let units = 201;

let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Bill" , bill);

let username = "admin" ;
let password = "12345"

if(username === "admin" && password === "12345"){
    console.log("Login successfully");
}else {
    console.log("Invalid credentials");
}


let salary = 50000;
let experience = 4;

let bonus;

if(experience >= 10) {
    bonus = salary * 20 / 100;
} else if (experience >= 5) {
    bonus = salary * 10 / 100;
}else if (experience >= 2) {
    bonus = salary * 5 / 100;
} else {
    bonus = 0
}

let finalSalary = salary + bonus;

console.log("Original salary" , salary);
console.log("Bonus", bonus);
console.log("Final Salary" , finalSalary);

let age = 60;

if(age < 0){
    console.log("Invalid age");
}else if(age <= 12) {
    console.log("Child");
}else if( age <= 19) {
    console.log("Teenager");
} else if ( age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

let num = 5;

switch (num) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number");
}

let signal = "yellow";

switch (signal) {
    case "red":
        console.log("STOP");
        break;
    case "green":
        console.log("GO");
        break;
    case "yellow":
         console.log("WAIT");
        break;
    default:
        console.log("Invalid signal");
}


let num1 = 53;
let num2 = 4;
let choice = 4;

switch (choice) {
    case 1:
        console.log("Addition",num1 + num2);
        break;
    case 2:
        console.log("Multiplication",num1 * num2);
        break;
    case 3:
        console.log("Substraction",num1 - num2);
        break;
    case 4:
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log("Division",num1 / num2);
        }
        break;
    case 5:
        console.log("Remainder",num1 % num2);
        break;
    default:
        console.log("Invalid choice");
}

let num = 5;

switch (num) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}


let age = 12;
let numberOfTickets = 4;

let totalTicketprice ;

if(age < 0){
    console.log("Invalid age");
}else if( age <= 12){
     totalTicketprice = 100 * numberOfTickets
} else if( age <= 59){
     totalTicketprice = 200 * numberOfTickets
} else {
     totalTicketprice = 120 * numberOfTickets
} 

console.log("Total" , totalTicketprice);
let quantity = 100;
let choice = 4;
let price;

let option= 2
switch (option) {
    case 1:
        console.log("Burger Selected");
        price = 50
        break;
    case 2:
        console.log("Pizza Selected");
        price = 250
        break;
    case 3:
        console.log("Pasta Selected");
        price = 180
    case 4:
        console.log("Sandwich Selected");
        price = 120
        break;
    case 5:
        console.log("Momos Selected");
        price = 40;
        break;
}

if (choice >= 1 && choice <= 4 && quantity > 0) {
    let total = price * quantity;
    console.log("Total", total);
} else {
    console.log("Invalid choice or quantity");
}


let balance = 235;
let withdrawAmmount = 200;
let deposit = 300;
let choice = 3;

// let option = 1

switch(option) {
    case 1:
        console.log("Current Balance :", balance);
        break;
    case 2:
        if (deposit > 0) {
            balance += deposit;
            console.log("Money deposited successfully");
            console.log("New Balance", balance);
        } else {
            console.log("Invalid deposit ammount");
        }
        break;
    case 3:
        if (withdrawAmmount <= 0) {
            console.log("Invalid withdraw ammount");
        } else if (withdrawAmmount > balance) {
            console.log("Insufficient Balance");
        } else {
            let remaining = balance - withdrawAmmount;
            console.log("Withdraw Successfull");
            console.log("Remaining Amount", remaining);
        }
        break;
    case 4:
        console.log("Thanks for using the ATM");
        break;
    default:
        console.log("Invalid choice");
}

let price = 1000;
let quantity  = 2;

let originalBill = price * quantity;
let discount = originalBill * 10 / 100;
let finalBill = originalBill - discount;

console.log("Original Bill :" , originalBill);
console.log("Discount Amount :" , discount);
console.log("Final Bill :" , finalBill);


let number1 = 16;

if(number1 % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


let num = 10;

if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

let num1 = 20;
let num2 = 20;
let num3 = 20;

if (num1 >= num2 && num1 >= num3) {
    console.log("Num1 is largest");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Num2 is largest");
} else {
    console.log("Num3 is largest");
}


practice 

let age = 18

if(age <= 18){
    console.log("you are not eligible ti vote");
}else if (age>=18 && age<=60){ 
    console.log("you are eligible");

}else{
    ("none of the above");
}


let isLoggedIn = true;
let hasSubscription = true;

if (isLoggedIn===true && hasSubscription===true)
{
    console.log("access granted to premiun");
}else{
console.log("not subscibe");
}

let username = "admin" ;
let password = "12345"

if(username === "admin" && password === "12345"){
    console.log("Login successfully");
}else {
    console.log("Invalid credentials");
}

let option = 1

switch(option) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    default:
        console.log("invalid choice");
        

}


4) question


for (let i=1; i<=10; i++)
    console.log(i)

let i =0
while (i<=10){
    if (i%2==0);

    i++;
    console.log(i)
}
let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

let signal = "red";
// let stop = red
// let fast = green
// let slow = yellow
// let color =["red","yellow","green"]
if (signal="red"){
    console.log("stop!!");
}else if (signal="yellow"){

    console.log("slow chalo!!");
}else{  
    console.log("bhagao");

}



let age =18;
let isStudent=true;

if(age===18 && isStudent===true){
    console.log("eligoble to discount");

}else{
    console.log("eligible to out");
}


// if (num1 >= num2 && num1 >= num3) {
//     console.log("Num1 is largest");
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log("Num2 is largest");
// } else {
//     console.log("Num3 is largest");
// }




