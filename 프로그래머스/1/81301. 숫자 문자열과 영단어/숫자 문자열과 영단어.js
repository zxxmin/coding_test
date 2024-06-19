const solution = (s) => {
    const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    eng.forEach((item, idx) => {
		s = s.replace(new RegExp(item, 'g'), idx);
	});
	
	return Number(s); 
}