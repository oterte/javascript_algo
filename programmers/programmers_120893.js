function solution(my_string) {
    var answer = [];
    let arr = [...my_string]
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== arr[i].toLowerCase()){
            answer.push(arr[i].toLowerCase())
        }else if(arr[i] !== arr[i].toUpperCase()){
            answer.push(arr[i].toUpperCase())
        }
    }
    return answer.join("")
}
