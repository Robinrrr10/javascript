let nums = [2, 4, 12, 9, 5, 11]
console.log(nums)

let [a, b, c, d, e, f] = nums //assigning each element in array to different variable
console.log("a:" + a)
console.log("f:" + f)

let ns = [2, 7, 11, 4]
let [k, l, , n] = ns; //To skip element we dont want to use variable name, we can just give next comma
console.log(n);

let s1 = 45;
let s2 = 12;
[s1,s2] = [s2,s1];
console.log(s1, s2)

let nnn = [2, 8, 6, 34, 12, 68, 5]
let [k1, k2, ...k3] = nnn //k3 will have rest of all elements
console.log("k3:" + k3);


let sentence = "hi hello how are you this is man"
console.log(sentence)
let words = sentence.split(" ")
console.log(words)
let [w, x, , ...z] = words //"hi" is assigned to w, "hello" is assigned to x, "how" got skipped, z will have from "are.." to rest of the words
console.log(z)
