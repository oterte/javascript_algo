let input = require("fs").readFileSync("example.txt").toString().split("\n");

let test = Number(input[0]);
for (let i = 1; i <= test; i++) {
  let data = input[i].split(" ").map(Number);
  let n = data[0];
  let summaray = 0;
  for (let i = 1; i <= n; i++) {
    summaray += data[i];
  }
  let avv = summaray / n;
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (data[i] > avv) {
      cnt += 1;
    }
  }
  console.log(`${((cnt / n) * 100).toFixed(3)}%`);
}
