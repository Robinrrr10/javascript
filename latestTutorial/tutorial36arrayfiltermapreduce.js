let nums = [23, 14, 6, 7, 8, 16, 45, 36, 10]

let res1 = nums.filter( n => n%2===0)         //filter will check for condition and if element satisfy the condition it will filtered. here whatever element has mod of 2 is equals 0, those will be filtered
console.log(res1)

let res2 = res1.map( n => n+n) //map is used to do some logic with that element. Here i am doubling each elements
console.log(res2)

let res3 = res2.reduce( (a, b) => a + b) //reduce will used to do some logic will all element and return one element. Here it is adding each element and returned the sum
console.log(res3)


//in single line
let result = nums.filter( n => n%2===0).map( k => k+k).reduce((j, l) => j + l)
console.log(result)