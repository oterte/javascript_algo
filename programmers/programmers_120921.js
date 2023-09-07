function solution(A, B) {
    let arr = [...A]
     for(let i=1; i<arr.length; i++) {
        if(A === B) {
            return 0
        } else {
            arr.unshift(arr.pop())
            
            if(arr.join('') === B) {
                return i
            }
        }
    }
    
    return -1
}
