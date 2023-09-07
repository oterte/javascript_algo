function solution(common) {
    var answer = 0;
    let sum = 0;
    if(common[1] - common[0] == common[2] - common[1]){
        sum += common[1] - common[0]
        answer += sum + common[common.length-1]
    }else if(common[1] / common[0] == common[2] / common[1]){
        sum += common[1] / common[0]
        answer += sum * common[common.length-1]
    }
    return answer
}
