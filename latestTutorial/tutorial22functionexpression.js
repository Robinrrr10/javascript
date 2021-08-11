
//This is anonymous function or function expression
let add = function(num1, num2)
    {
        return num1 + num2;
    }
console.log("result is:" + add(4, 5));
console.log(add);
let result = add(13, 7);
console.log("RES:" + result);
let sum = add; //This will assign function
console.log("Result of sum:" + sum(9, 2));
console.log(sum)
let addition = sum
console.log("Result of addition:" + addition(4, 5));
console.log(addition)