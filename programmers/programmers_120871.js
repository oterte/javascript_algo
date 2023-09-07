function solution(n) {
    var answer = 0;
    for (let i = 1; i<=n; i++){
        // i의 증가에 따른 answer 증가
        answer++;
        // 3이 들어가지 않으며, 3의 배수 또한 아닌 경우까지 반복
        while(answer.toString().includes('3') || answer % 3 === 0){
            answer++;
        }
        console.log(answer)
    }
    return answer;
}