const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const arr = input.slice(1);
arr.forEach(test => {
    let num=0;
    console.log(test.split('').reduce((acc, cur) => {
        num = cur === 'O' ? num+1 : 0
        return acc + num
    }, 0))
})