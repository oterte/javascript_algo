let input = require("fs").readFileSync("example.txt").toString().split(" ");


// vs코드에선 예시문항 다 정답인 풀이 -> 1152번 예제 출력이 잘못되어있음
// for (let i = 0; i < input.length; i++) {
//   if (input[i] === "") {
//     input.splice(i, 1)
//   }
// }

// console.log(input.length)

// 백준에서 맞는 풀이

let data = input[0].trim().split(" ")
if(data == ''){
    console.log(0)
}else{
    console.log(data.length)
}