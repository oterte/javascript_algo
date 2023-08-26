let input = require("fs").readFileSync("example.txt").toString().split(" ");

let a = parseInt(input[0]);
console.log(a);

for (let i = 1; i <= 9; i++) {
  console.log(`${a} * ${i} = ${a*i}`);
}
