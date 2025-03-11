const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, x] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);

console.log(a.filter(num => num < x).join(" "));