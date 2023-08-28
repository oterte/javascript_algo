let input = require("fs").readFileSync("example.txt").toString().split(" ");



let a = input[0].split(" ")[0];
let b = input[1].split(" ")[0];
let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];

if(Number(newA) > Number(newB)){
    console.log(newA)
}else{
    console.log(newB)
}