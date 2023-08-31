function solution(array) {
    var answer = 0;
    let arr = []
    for(let i = 0; i<array.length; i++){
        arr[i] = String(array[i])
        for(let j = 0; j<arr[i].length; j++){
            if(arr[i][j] == 7){
                answer += 1
            }
        }
    }
    return answer;
}
