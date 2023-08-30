function solution(a, b) {
    var answer = 0;
    let num = 2 * a * b;
if(Number(String(a)+String(b)) > num){
    answer += Number(String(a)+String(b))
}else if(Number(String(a)+String(b)) < num){
    answer += num;
}else if(Number(String(a)+String(b)) == num){
    answer += Number(String(a)+String(b))
}
return answer
}
