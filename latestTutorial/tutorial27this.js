let employee = {
    name: 'Ram',
    age: 28,

    printName: function() {
        //console.log("Name is: " + employee.name) //this is not recommented. so dont use. still it will work
        console.log("Name is: " + this.name) //This is recommented
    }
}

employee.printName()