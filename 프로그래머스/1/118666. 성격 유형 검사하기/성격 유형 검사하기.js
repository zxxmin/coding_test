const solution = (survey, choice) => {
    let newsurvey = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    survey.map((el, i) => {
        switch (choice[i]) {
            case 7 :
                newsurvey[survey[i][1]] += 3
                break;
            case 6 :
                newsurvey[survey[i][1]] += 2
                break;
            case 5 :
                newsurvey[survey[i][1]] += 1
                break;
            case 3 :
                newsurvey[survey[i][0]] += 1
                break;
            case 2 :
                newsurvey[survey[i][0]] += 2
                break;
            case 1 :
                newsurvey[survey[i][0]] += 3
                break;
            default : 
                break;

        }
    })


    let answer = newsurvey.R >= newsurvey.T ? "R" : "T";
    answer += newsurvey.C >= newsurvey.F ? "C" : "F";
    answer += newsurvey.J >= newsurvey.M ? "J" : "M";
    answer += newsurvey.A >= newsurvey.N ? "A" : "N";

    return answer
    
}