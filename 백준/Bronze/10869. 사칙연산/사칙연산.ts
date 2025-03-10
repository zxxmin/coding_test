let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);