const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const a = input.map(Number);

!(a%4) && (a%100 || !(a%400)) ? console.log(1) : console.log(0)