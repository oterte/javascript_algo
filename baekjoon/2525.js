let input = require('fs').readFileSync('example.txt').toString().split('\n');


let [a, b] = input[0].split(' ').map(Number)
let c = Number(input[1])

// 입력으로 주어진 시각을 분의 형태로 바꾸고

let tm = a * 60 + b + c

// 분이 주어졌을 때 시각을 알려주게 작성
// 그 시각을 1440으로 나누기 => 하루는 1440분이기 때문
tm %= 1440;

// 나온 값을 60으로 나누고 그 몫이 시간, 나머지가 분
let h = parseInt(tm / 60);
let m = tm % 60
    
console.log(h+' ' +m)