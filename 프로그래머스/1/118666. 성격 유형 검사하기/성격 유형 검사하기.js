const solution = (survey, choice) => {
    let newsurvey = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    
    const totalScore = (type, points) => newsurvey[type] += points;
    
    survey.forEach((el, i) => {
        const [firstType, lastType] = el;
        const score = choice[i]
        const points = Math.abs(score - 4);
        
        if (score > 4) totalScore(lastType, points)
        else totalScore(firstType, points);
    })


    let answer = '';
    answer += newsurvey.R >= newsurvey.T ? "R" : "T";
    answer += newsurvey.C >= newsurvey.F ? "C" : "F";
    answer += newsurvey.J >= newsurvey.M ? "J" : "M";
    answer += newsurvey.A >= newsurvey.N ? "A" : "N";

    return answer
    
}