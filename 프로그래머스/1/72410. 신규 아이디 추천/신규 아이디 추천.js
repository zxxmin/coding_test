const solution = (new_id) => {
    let answer = new_id.toLowerCase().replaceAll(/[^a-z0-9-_.]+/g, '').replaceAll(/(?<=\.)\./g, '').replaceAll(/(^\.|\.$)/g, '');
    answer = answer === '' ? 'a' : answer
    answer = answer.slice(0,15).replaceAll(/(^\.|\.$)/g, '');
    
    while(answer.length < 3) answer += answer.slice(-1);
    
    return answer;
} 