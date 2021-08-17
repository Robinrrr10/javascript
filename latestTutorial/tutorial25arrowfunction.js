
//instead of function keyword we are using arrow =>
//Eg: let add => function(num1, num2) //instead of this we use below
let add = (num1, num2) =>
{
    console.log("Hi.. num1:" + num1 + " num2:" + num2)
    return num1 + num2;
}

console.log(add(3, 5))

let printing = (str) =>
{
    console.log("hello:" + str)
}

printing("Ram")

//If function has one line and that one line is return, then we can write in single line as like below

let sub = (num1, num2) => num1 - num2

console.log(sub(8, 2))