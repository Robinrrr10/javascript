let day = "Wednesday";

switch(day){
    case "Monday":{
        console.log("This is Monday");
    }
    case "Tuesday":{
        console.log("This is Tuesday");
    }
    case "Wednesday":{
        console.log("This is Wednesday");
    }
    case "Thursday":{
        console.log("This is Thursday");
    }
    case "Friday":{
        console.log("This is Friday");
    }
    case "Saturday":{
        console.log("This is Saturday");
    }
    case "Sunday":{
        console.log("This is Sunday");
    }
}

console.log("----");
switch(day){
    case "Monday":{
        console.log("This is Monday");
        break;
    }
    case "Tuesday":{
        console.log("This is Tuesday");
        break;
    }
    case "Wednesday":{
        console.log("This is Wednesday");
        break;
    }
    case "Thursday":{
        console.log("This is Wednesday");
        break;
    }
    case "Friday":{
        console.log("This is Friday");
        break;
    }
    case "Saturday":{
        console.log("This is Saturday");
        break;
    }
    case "Sunday":{
        console.log("This is Sunday");
        break;
    }
    default: {
        console.log("invalid day");
    }
}

console.log("----");
switch(day){
    case "Monday":{
        console.log("7 am alaram");
        break;
    }
    case "Tuesday":
    case "Wednesday":
    case "Thursday":{
        console.log("8 am alaram");
        break;
    }
    case "Friday":{
        console.log("9 am alaram");
        break;
    }
    case "Saturday":
    case "Sunday":{
        console.log("11 am alaram");
        break;
    }
    default: {
        console.log("invalid day");
    }
}