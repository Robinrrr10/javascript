let arr = []
console.log(arr)
console.log("size of array is:" + arr.length)
arr[0] = 23
arr[57] = 43 //created array upto 57th index and assigned 57th index value as 43
console.log(arr)
console.log("size of array is:" + arr.length)
for(let n of arr){ //for of will assign each value for every iteration
    console.log("each value is:" + n)
}

for(let key in arr) { // for in will assign each key for every iteration. Here key is index. also this will ignore undefined one
    console.log("each key is:" + key)
    console.log(arr[key])
}
