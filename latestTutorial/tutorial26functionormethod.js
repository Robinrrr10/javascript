let student = {
    name: 'Ram',
    age: 26,
    mark: 89,

    display: function() {
        console.log("Hello man")
    },

    grade: function() {
        return "A+"
    },

    total: function(allMarks){
        return allMarks;
    }

}

student.display()
let gr = student.grade();
console.log(gr)
let tt = student.total(50);
console.log(tt)