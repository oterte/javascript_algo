let input = require("fs").readFileSync("example.txt").toString().split(" ");

let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

if (minute - 45 < 0) {
	hour -= 1;
	minute = 60 + minute - 45;
} else {
	minute = minute - 45;
}
if (hour < 0) {
	hour = 23;
}

console.log(hour, minute);