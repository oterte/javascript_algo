let input = require("fs").readFileSync("example.txt").toString().split(" ");

let a = parseInt(input[0]);
let sum = ''


for(let i = 0; i<a; i++){
    for(let j = 0; j<=i; j++){
        sum += '*'
    }
    sum += '\n'
}
console.log(sum)