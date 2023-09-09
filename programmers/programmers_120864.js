function solution(my_string) {
    var answer = 0;
    for(let i = 0; i<my_string.length; i++){
        let tmp = 0;
        while(!Number.isNaN(Number(my_string[i]))){
            tmp += my_string[i];
            console.log(tmp);
            i++;
        }
        answer += Number(tmp);
        console.log(answer);
    }
    return answer;
}