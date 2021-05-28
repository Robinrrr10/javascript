let num1 = 5
let num2 = 2
let result= num1 + num2
console.log(result)
result= num1 - num2
console.log(result)
result= num1 * num2
console.log(result)
result= num1 / num2
console.log(result)
result= num1 % num2
console.log(result)
console.log("-----")

let val1 = true
let val2 = true
console.log(Number(val1), Number(val2))
let result2 = val1 + val2 // true + true = 1 + 1 = 2
console.log(result2)
console.log("-----")

let num3 = 4
num3 = num3 + 2
console.log(num3)
let num4 = 9
num4 += 2 // num4 += 2    => num4 = num4 + 2 => 9 + 2 =>11
console.log(num4)

let num5 = 7
num5++      //7++ => 7 + 1 => 8
console.log(num5)

let num6 =17
num6--
console.log(num6)

let num7=21
let x1 = num7++ //post increamenet //assign and post increation
console.log(x1, num7)

let num8=31
let x2 = ++num8  //pre increament // increament and then assign
console.log(x2, num8)

console.log("------")

let num9 = 3
let cube = num9 * num9 * num9
console.log(cube)
cube = Math.pow(num9, 3)
console.log(cube)
cube = num9 ** 3
console.log(cube)

