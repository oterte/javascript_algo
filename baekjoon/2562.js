let input = require("fs").readFileSync("example.txt").toString().split("\n");


let b = input.length
let max = 0
let index = 0
for(let i = 0; i<b; i++){
    let num = parseInt(input[i])
    if(num > max){
        max = num;
    }
}
for(let i = 0; i<b; i++){
    let num = parseInt(input[i])
    if(num === max){
        index = i;
    }
}


// for(let i = 0; i<b; i++){
//     let num = parseInt(input[i])
//     if(num < max){
//         max = num;
//         index = i;
//     }
// }

console.log(max)
console.log(index+1)