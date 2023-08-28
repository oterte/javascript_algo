let input = require("fs").readFileSync("example.txt").toString().split("\n");

let test = Number(input[0]);

for (let i = 1; i <= test; i++) {
  let [r, s] = input[i].split(" ");
  console.log(r)
  console.log(s)
  let result = "";
  for (let j = 0; j <= s.length; j++) {
    result += s.charAt(j).repeat(r);
  }
  console.log(result)
}
