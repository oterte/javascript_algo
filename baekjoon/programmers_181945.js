const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let sum = '';
    for(let i = 0; i<str.length; i++){
        sum += str[i] + "\n"
    }
    console.log(sum)
    
});
