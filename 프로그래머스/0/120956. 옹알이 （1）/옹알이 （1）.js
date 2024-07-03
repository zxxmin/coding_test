const solution = (babbling) => {
    const arr = ["aya", "ye", "woo", "ma"]
    let answer=0;
    babbling.forEach(el => {
        for(let i = 0; i < arr.length; i++) el = el.split(arr[i]).join('.');
        if(Array.from(el).filter((item, pos) => el.indexOf(item) === pos).join('') === '.') answer++
    })
    return answer
}