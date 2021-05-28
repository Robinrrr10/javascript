console.log(8 > 12)
console.log(8 < 12)
console.log(8 >= 12)
console.log(8 <= 12)
console.log("----")

let a = 12
let b = 5
let result = a > b
console.log(result)
console.log("----")

let st1 = "a"
let st2 = "b"
let result2 = st1 > st2  //It will compare the ascii value. Always the greater alphabet will have the higher value
console.log(result2)

st1 = "abd"  //first two are same. but third value d is greater than c
st2 = "abc"
result2 = st1 < st2
console.log(result2)

st1 = "abc"
st2 = "abcklklk" //first three has same value. but here there are extra value
result2 = st1 < st2
console.log(result2)

st1 = "abd"  //as d is greater than c. So wont check for other chars even there are more number chars 
st2 = "abcezx"
result2 = st1 > st2
console.log(result2)

let val1 = "5"
let val2 = 2
result = val1 > val2 //Here val1 5 will be converted into number
console.log(result)
console.log("---")

let val3 = 7
let val4 = 7
result = val3 == val4
console.log(result)

let va1 = "7"
let va2 = 7
result = va1 == va2  //== will compare only the value
result = va1 === va2 //=== will compare value and datatype
console.log(result)
//IMPORTANT : All ways use === for comparing. Only this will give correct value


