const solution = (s) => {
    const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    eng.filter((item, idx) => {
        for(let i=0; i < s.length; i++) {
            if(s.indexOf(item) !== -1) s = s.replace(item, idx);
        }
    })
    return Number(s)
}