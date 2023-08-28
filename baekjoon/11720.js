let input = require("fs").readFileSync("example.txt").toString().split("\n");

let test = Number(input[0]);
let number = input[1];

let sum = 0;

for (let i = 0; i < test; i++) {
  sum += Number(number[i]);
}

console.log(sum)