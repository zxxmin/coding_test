function solution(myString, pat) {
    let answer = [];
    myString.split('').forEach((el) => {
        el = el === 'A' ? 'B' : 'A'

        answer = answer.concat(el);
        
    })
    
    return answer.join('').includes(pat) ? 1 : 0;
}