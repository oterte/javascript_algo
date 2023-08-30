
function solution(a, b) {
    var answer = 0;
if(Number(String(a)+String(b)) > Number(String(b)+String(a))){
    answer += Number(String(a)+String(b))
}else if(Number(String(b)+String(a)) > Number(String(a)+String(b))){
    answer += Number(String(b)+String(a))
}else if(Number(String(a)+String(b)) == Number(String(b)+String(a))){
    answer += Number(String(a)+String(b))
}
return answer
}
