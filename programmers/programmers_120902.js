function solution(my_string) {
    let string = my_string.split(" ");
     let answer = Number(string[0]);
    string.forEach((item, index) => {
        if(item === "+"){
            answer += Number(string[index + 1]);
        }
        
        if(item === "-"){
            answer -= Number(string[index + 1]);
        }
    })
    return answer
}
