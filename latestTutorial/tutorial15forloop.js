console.log("Start");
for(let i = 1; i<=5; i++){
    console.log("hi", i);
}

let j=1;
for(;j<=3;) //all in for loop are optional
{
    console.log("hello", j);
    j++;
}

let b=1;
for(let a=4; a>=1; a--){
    console.log("aaaa", a);
    for(;b<=3;b++){
        console.log("bbbb", b);
    }
}

console.log("End");