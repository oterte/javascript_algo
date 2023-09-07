function solution(id_list, report, k) {
  // answer 배열을 id_list의 크기만큼 할당하고 fill함수를 사용하여 0으로 초기화한다.
    const answer = new Array(id_list.length);
    answer.fill(0) 
  
    const report_list = {} //
    // report_list 객체에 key는 uesr의 id 값을 value는 신고한 사람을 담기위한 빈 배열을 추가한다.
    id_list.map((user)=>{
        report_list[user] = [] //key로 userid를 value로 빈 배열을 가지는 객체
    })
    
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }        
    })
    
    for(const key in report_list){
        if(report_list[key].length >= k){ //이용정지 유저
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
    
}
