function solution(polynomial) {
    var answer = [];
    let xnum = 0
    let num = 0
     const arr = polynomial.split(" + ");
    for(let i = 0; i<arr.length; i++){
        if(arr[i].includes('x')){
            // x가 포함되어있다면 replace() 메서드를 이용해 x를 제거해주고
      // 만약 x를 제거하였는데 공백일 경우 "1"을 넣어준다.
            const strVal = arr[i].replace("x", "") || "1";

      // 구한 값을 정수로 바꾸어 더해준다.
      xnum += parseInt(strVal, 10);
        }else{
            num += parseInt(arr[i]);
        }
    }
    console.log(xnum)
    console.log(num)
    // "계수 1은 생략합니다." 제한사항을 참고하여
  // 구해둔 xNum이 1을 경우 공백으로 아니면 그대로 입력하고 뒤에 x를 붙여준다.
     if (xnum) answer.push(`${xnum === 1 ? "" : xnum}x`);
  if (num) answer.push(num);
    return answer.join(' + ');
}