function solution(babbling) {
    var answer = 0;
    for(let i = 0; i<babbling.length; i++){
      //replace 함수를 사용하여 말할 수 있는 단어를 찾아 공백으로 변경
      //trim 함수를 사용하여 앞뒤 공백을 제거한 값이 나온다면 answer 값 추가
        if(babbling[i].replace("ye"," ").replace("aya"," ").replace("woo"," ").replace("ma"," ").trim() === "")           {
            answer = answer + 1 ;
        }    
    }
    return answer;
}
