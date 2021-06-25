console.log("Start");
let student = {
    name : "Ram",
    age : 28,
    laptop : {
        ram : 4,
        cpu : "i7",
        folders: {
            cFolder: 100,
            dFolder: 254
        }
    },
    mark: 88, // comma at last will be ignored
}

console.log(student);
console.log(student.name);
console.log(student.laptop);
console.log(student.laptop.folders);
console.log(student.laptop.folders.dFolder);
console.log(student.name.length); //length is inbuild method
console.log(student.firstName); // firstName is not available
//console.log(student.firstName.length); //This will give error
console.log(student.firstName?.length); //This wont give error. ? will handle this/ ? wil check whether object is there or not
console.log(student?.laptop?.folders?.dFolder); //it will go to each next element by checking. then finally it will print. If not available it will give undefined
console.log(student?.laptopjbjkhkh?.folderssrtdgrd?.dFolder); //These kind of this wil be easiy handled by ?
console.log(student);
delete student.laptop.folders; //This is used to remove an object or param from an object
console.log(student);
console.log("End")