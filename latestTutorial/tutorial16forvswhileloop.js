console.log("Start");
for(let a=1;a<=5;a++) //When we know start and end value. then go with for loop
{
    console.log(a);
}
let n = 24232;
while(n > 0) {      // When we dont know the start and end point use while loop
    console.log(n%10);
    n = parseInt(n / 10);
}