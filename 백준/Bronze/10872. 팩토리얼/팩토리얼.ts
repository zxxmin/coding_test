const num = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(" ");
let count = 1;

if(num !== 0) {
    for(let i = 1; i <= num; i++) {
        count = count * i;
    }
}

console.log(count)