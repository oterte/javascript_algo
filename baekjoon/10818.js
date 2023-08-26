let input = require("fs").readFileSync("example.txt").toString().split(" ");


let a = parseInt(input[0])
let b = parseInt(input[1])
let c = parseInt(input[2])
let d = parseInt(input[3])
let e = parseInt(input[4])

let min = Math.min(a,b,c,d,e)
let max = Math.max(a,b,c,d,e)

console.log(min, max)
// let t = Number(input[0]);
// let arr = input[1].split(' ').map(x=>Number(x));

// let minValue = arr.reduce((a, b) => Math.min(a, b));
// let maxValue = arr.reduce((a, b) => Math.max(a, b))
// console.log(minValue+' '+maxValue)