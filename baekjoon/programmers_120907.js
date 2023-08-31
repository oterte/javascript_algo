function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        // console.log(calc)
        // console.log(result)
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');
        // console.log(a)
        // console.log(b)

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
    return answer;
}
