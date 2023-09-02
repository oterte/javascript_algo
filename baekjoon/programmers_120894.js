function solution(numbers) {
   
    let arr = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    arr.forEach((num, index) => {
        numbers = numbers.split(num).join(index)
    })
    return Number(numbers)
}
