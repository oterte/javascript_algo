let input = require('fs').readFileSync('example.txt').toString().split(' ');

let a = parseInt(input[0])
let sum = 0

for(let i = 0;  i<=a; i++){
    sum += i;
} 
console.log(sum)