function solution(lines) {
    let answer = 0
    
    // 선분이 놓일 공간
    let arr = new Array(200)
    arr.fill(0)
    
    for(let i = 0; i<3; i++){
        let left = lines[i][0]
        let right = lines[i][1]
        console.log(left)
        for(let j = left; j<right; j++){
            arr[j+100] += 1;
        }
    }
    
      for (let i in arr) {
    if (arr[i] > 1) {
      answer += 1;
    }
  }
    return answer
}