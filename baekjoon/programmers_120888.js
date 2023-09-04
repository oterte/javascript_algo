function solution(my_string) {
    let arr = [...my_string]
    let set = new Set(arr)
    let answer = [...set].join("")
    return answer
}
