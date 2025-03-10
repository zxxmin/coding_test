const fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");

const [a, b] = input.map(Number);

console.log(`${a+b}
${a-b}
${a*b}
${Math.floor(a/b)}
${a%b}`);