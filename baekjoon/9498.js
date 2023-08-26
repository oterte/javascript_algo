let input = require('fs').readFileSync('example.txt').toString().split('\n');


let num = parseInt(input[0])
if(num >= 90 && num <= 100 ){
    console.log('A')
}
if(num >=80 && num < 90){
    console.log('B')
}
if(num >= 70 && num < 80){
    console.log('C')
}
if(num >= 60 && num < 70){
    console.log('D')
}
if(num < 60){
    console.log('F')
}