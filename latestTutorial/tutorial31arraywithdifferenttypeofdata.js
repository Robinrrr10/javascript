let myarr = [3, 2, 'hello', 4.5, { name: 'ram'}, "This", function(){console.log("heeee")} ];
console.log(myarr)
myarr[7] = "newda"; //we can add new value  by giving index also
console.log(myarr)
console.log(myarr[4].name)
myarr[6]()