function solution(sides) {
    var answer = 0;
    let sum = sides[0] + sides[1]
    let max = Math.max.apply(null, sides)
    let min = Math.min.apply(null, sides)
    for(let i = max-min+1 ; i <= max ; i ++) {
        answer++
    }
    // 나머지 한 변이 가장 긴 변인 경우
    for(let i = max+1 ; i < max+min ; i ++) {
        answer++
    }
    return answer
}