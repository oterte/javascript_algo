function solution(before, after) {
    var answer = 0;
    let a = before.split('').sort().join("")
    let b = after.split('').sort().join("")
    
    return a === b ? 1 : 0
}
