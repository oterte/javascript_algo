function solution(s) {
    var answer = '';
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            arr.push(s[i])
        }
    } return arr.sort().join('')
}
