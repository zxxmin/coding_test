const solution = (lottos, win_nums) => {
    const level = [6, 5, 4, 3, 2, 1];
    
    let highest = 0;
    let lowest = 0;
    
    lottos.forEach(lotto => {
        if(lotto === 0) highest++
        else if (win_nums.includes(lotto)) lowest++
    })
    
    highest = highest + lowest || 1
    lowest = lowest || 1
    
    const answer = [highest, lowest].reduce((acc, el) => {
        level.forEach((ele, i) => {
            if(ele === el) acc.push(i + 1)}
        );

        return acc
    }, [])
    
    return answer
}