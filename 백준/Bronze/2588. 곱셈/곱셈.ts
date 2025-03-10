const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [a, b] = input.map(Number);

String(b).split('').reverse().forEach(num => console.log(a*Number(num)));
console.log(a*b);