const input: string = require("fs").readFileSync("/dev/stdin", "utf8").trim();
console.log(input.split(/\s+/).filter(w => w !== "").length)