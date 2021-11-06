let nums = [21, 45, 34, 8, 7, 54, 9, 6]

console.log(nums)

nums.forEach(myfunc)           //for each method will pass the value one by one
console.log("-------")

nums.forEach((n) => {

    console.log("after multiplying by 2 :" + n * 2)

})

nums.forEach((eachNum, index, allnums) => { //forEach can pass upto three variable. each number, its index and all numbers

    console.log("number is:" + eachNum + ", its index is:" + index + ", all numbers are:" + allnums)

})

function myfunc(number) {
    console.log("number is:"+number)
}