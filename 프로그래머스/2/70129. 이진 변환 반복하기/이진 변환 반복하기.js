const solution = (s) => {
    let zero = 0;
    let loop = 0;
    
    for(let i = 0; i <= s.length; i++) {
        s = s.split('').map(el => el === '1' ? '1' : (++zero, '')).join('').length.toString(2);
        loop++;
        if(s.length === 1 && s === '1') break
        else i=0;
    }
    
    return [loop, zero]
}