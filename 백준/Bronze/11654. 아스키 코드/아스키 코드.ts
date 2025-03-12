const input: string[] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(" ");

console.log(input[0].charCodeAt(0))