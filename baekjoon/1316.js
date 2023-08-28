let input = require("fs").readFileSync("example.txt").toString().split("\n");

// 각 알파벳에 대해 등장한 횟수가 1번인지 체크하기
let n = Number(input[0]);
let sum = 0;
function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    //오른쪽 단어와 다르다면
    if (data[i] != data[i + 1]) {
      // 이미 등장한 적 있는 알파벳이라면
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

for (let i = 1; i <= n; i++) {
  let data = input[i];
  if (check(data)) {
    sum += 1;
  }
}
console.log(sum);
