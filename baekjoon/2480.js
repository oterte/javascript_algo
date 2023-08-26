let input = require('fs').readFileSync('example.txt').toString().split(' ');


let a = parseInt(input[0])
let b = parseInt(input[1])
let c = parseInt(input[2])

console.log(a)
console.log(b)
console.log(c)


if(a == b&& a== c){
    console.log(10000 + a * 1000)
}else if(a == b){
    console.log(1000 + a * 1000)
}else if(b == c){
    console.log(1000 + b * 1000)
}else if(c == a){
    console.log(1000 + c * 1000)
}else{
    console.log(Math.max(a,b,c) * 100)
}
// if(a !== b && a !== c){
    
// }