// example.txt의 예제 입력을 받아서 실행시키는 파일

let input = require('fs').readFileSync('example.txt').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a+b);