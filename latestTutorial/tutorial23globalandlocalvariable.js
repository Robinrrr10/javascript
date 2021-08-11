let num = 5; //This is global variable //we can use any where
function printing(a, b){
    let k = 10; //local variable
    console.log("k is: "+k)
    console.log("num is: "+num) //wer
    console.log(a, b, k)
}

printing(5, 20);
//console.log(k); //we cannot use local variable outside the function. this will give error