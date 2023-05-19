let sum = 0
let num = 0

while(num<=12256){
    num++
    sum += 1000/num
}
console.log(sum)


const stepNum = (num) =>{
    let sum = 0
    let base =num
    while(sum<=1){
        sum+=1000/num
        base++
    }
    return base-num
}

console.log(stepNum(10000))




