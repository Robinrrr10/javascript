console.log("start");

let student = {
    name : 'Ram',
    age : 26,
    mark : {
        english : 59,
        maths : 78
    }
}

for(let key in student)
{
    console.log(key, student[key]);
}

console.log("end");