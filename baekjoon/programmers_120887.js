function solution(i, j, k) {
    var answer = 0;
    let arr = []
    for(let num = i; num<=j; num++){
        arr.push(String(num))
    }
    for(let num = 0; num<arr.length; num++){
        for(let z = 0; z<arr[num].length; z++){
            if(Number(arr[num][z] == k)){
                answer += 1;
            }
        }
    }
    return answer
}
