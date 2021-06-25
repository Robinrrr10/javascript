console.log("Start");
let student = {}
console.log(student);
console.log(typeof student)

let employee = {
    name: 'Ram',
    dept: 'dev',
    'work exp': 4
}
console.log(employee);
console.log(employee.name)
console.log(employee.dept)
console.log(employee['name']) //This is equal to employee.name
console.log(employee['work exp']) // When there is space in key, we need to use this way
let userinput = 'name';
console.log(employee[userinput]); //When we need to use other variable which holds other key, we need to use this way


console.log("End");
