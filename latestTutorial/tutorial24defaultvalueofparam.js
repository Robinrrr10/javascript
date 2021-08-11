function add(a, b, c = 1){ //if c value is not passed, it will take default 1 as the value

    console.log(a, b, c)
    return a + b + c

}

console.log("result1: "+add(10, 20 ,30)); //here we are passing three variable
console.log("result2: "+add(5, 8)); // here we are passing only 2 varaiable. so third variable takes defaul