function solution(myString, pat) {
    let answer=[];
    myString.split('').forEach((el) => {
        el === 'A' ? el = 'B' :el = 'A'

        answer = answer.concat(el);
        
    })
    
    return answer.join('').includes(pat) ? 1 : 0;
}