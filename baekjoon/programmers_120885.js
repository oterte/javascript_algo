function solution(bin1, bin2) {
    var answer = '';
    let b1=parseInt(bin1, 2)
    let b2 =parseInt(bin2, 2)
    console.log(b1)
    console.log(b2)
    return answer =(b1+b2).toString(2);
}
