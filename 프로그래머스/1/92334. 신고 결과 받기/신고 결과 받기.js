const solution = (id_list, report, k) => {
    let idList = id_list.reduce((acc, el) => ({...acc, [el]: 0}), {});

    let reportList = report.reduce((acc, el) => {
        const [reporter, reportee] = el.split(' ');

        if(!acc[reportee]) acc[reportee] = [];
        acc[reportee].push(reporter);

        return acc        
    }, {})

    Object.keys(reportList).forEach(key => {
        reportList[key] = [...new Set(reportList[key])]
        if (reportList[key].length >= k) reportList[key].map(el => idList[el] += 1)
    })

    return [...Object.values(idList)]
}