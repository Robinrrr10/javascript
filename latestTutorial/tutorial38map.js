let map = new Map()
map.set("name", "ram") //to set key and value
map.set("age", 23)
map.set("dept", "cse")
map.set("name", "Dinesh") //ram will be replaced with dinesh for name. Duplicate of key value pair not allowe

console.log(map)

console.log(map.keys()) //to get all keys
console.log(map.values()) //to get all values

console.log(map.has("dept")) //It will check whether any key with dept or not

console.log(map.get("name"))  //to get value of the key
console.log(map.get("age"))

for(let [k, v] of map) {          //To get each key and value
    console.log(k, ":", v)
}

map.forEach((v, k) => {   //Here value will comes as first param and key will come as next param
    console.log(k, "==", v)
})