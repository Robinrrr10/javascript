let nums = new Set()

nums.add(3)
nums.add(23)
nums.add(56)
nums.add(3)
nums.add(10)
nums.add(10)

console.log(nums)

let nums2 = new Set("helloall") //this will take each character and consider this as set of char
console.log(nums2)

let val = new Set()
val.add('c')
val.add(34)
val.add(10)
val.add(34)
val.add('k')
val.add("hello")
val.add("man")
val.add(true)

val.forEach(each => {

    console.log("val: " + each);
})

console.log("has method:" + val.has("hello")) //has method will check whether this value is available or not


