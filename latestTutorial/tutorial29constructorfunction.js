function Student(name, age) {         //This is constructor function. function name start with upper case
    this.name = name
    this.age = age
    this.display = function(){
        console.log("hi hello")
    }
}

st1 = new Student("Ram", 28) //constructor function will be called along with new keyword
st2 = new Student("Dom", 34)

st1.display()
console.log(st1)
console.log(st2)
st1.age = 90
console.log(st1)
console.log(st2)
