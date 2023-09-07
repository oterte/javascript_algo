function solution(spell, dic) {
    let answer = 0
    let string = spell.sort().join("")
    console.log(string)
    for(let i = 0; i<dic.length; i++){
        let arr = dic[i].split("").sort().join("")
        console.log(arr)
        if(arr.includes(string)){
            answer += 1
        }
    }
    return answer == 1 ? 1: 2
}