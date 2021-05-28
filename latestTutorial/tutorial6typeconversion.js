let num = 6
console.log(num, typeof num)
let str = "12345"
console.log(str, typeof str)
let num2 = Number(str)
console.log(num2, typeof num2)
num2 = String(num2)
console.log(num2, typeof num2)
console.log("-----")
let num3 = 8
console.log(num3, typeof num3)
num3 = num3 + "" //number + string = string
console.log(num3, typeof num3)
num3 = num3 + 5 //string + number = string
console.log(num3, typeof num3)
num3 = num3 - 5 //string - number = Number(string) - number = number
console.log(num3, typeof num3)
let val1 = "hihi" - 5 //string - number = Number(string) - number = number // here it cannot convert hihi to Number. hence this result
console.log(val1, typeof val1)
let val2 = Boolean(0) // 0 = false
console.log(val2, typeof val2)
val2 = Boolean(1) // other than 0 others are true
console.log(val2, typeof val2)
val2 = Boolean(16)
console.log(val2, typeof val2)
val2 = Boolean(-16)
console.log(val2, typeof val2)
console.log("---")
let val3
console.log(val3, typeof val3)
console.log(Boolean("hi"))         //all false values will give false
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
let val4 = Number("123hihi") //cannot convert. so NaN
console.log(val4)
let val5 = parseInt("123hihihi") //This method can tke first available number value
console.log(val5)

