function solution(s) {
    let zero = 0;
    let loop = 0;

    while (s.length > 1) {
        s = s.split('').map(el => el === '1' ? '1' : (++zero, '')).join('').length.toString(2)
        loop++
    }

    return [loop,zero]
}