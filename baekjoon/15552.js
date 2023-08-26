let input = require("fs").readFileSync("example.txt").toString().split("\n");

let t = Number(input[0])



for(let i = 1; i<=t; i++){
    let a = parseInt(input[i].split(' ')[0])
    let b = parseInt(input[i].split(' ')[1])
    console.log(a+b)
}
// let t = Number(input[0])
// let sum = '';

// for(let i = 1; i<=t; i++){
//     let data = input[i].split(' ');
//     let a = Number(data[0]);
//     let b = Number(data[1]);
//     sum += a + b + '\n';
// }

// console.log(sum);