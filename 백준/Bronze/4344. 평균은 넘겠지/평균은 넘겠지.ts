const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const arr = input.slice(1);
arr.forEach(test => {
    const scr = test.split(' ').filter((t, idx) => idx > 0)
    const num = scr.length
    const avg = scr.map(Number).reduce((acc, cur) => acc + cur, 0) / num
    
    console.log((scr.filter(s => s > avg).length / num * 100).toFixed(3) + '%')
})