const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const num = input[1].split(" ").map(Number);
let count = 0;

function isPrime (num) {
    if (num < 2) return false;

    for(let i = 2; i <= num / 2; i++) {
        if(num % i === 0) return false
    }

    return true;
}

console.log(num.filter(num => isPrime(num)).length)