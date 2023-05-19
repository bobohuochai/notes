/**
 * f(1) =1
 * f(n)=f(n-1)*2
 * n = 63 求 f(1)到f(n)累计值
 */

function iteration(n) {
    let sum = 0
    let current = 1
    sum = current + sum
    for(let index = 2;index<n+1;index++) {
        current = current*2 
        sum += current
    }
    return sum
}

console.log(iteration(63))



function sqrt(n,deltaThreshold=0.000004,maxTry=1000000){
    let result = -1.0
    let min =1
    let max = 10
    let index = 0
    while(index<maxTry){
        let mid = (min+max)/2
       const square = mid * mid
       const currentDelta = Math.abs(square/n-1)
       if(currentDelta<=deltaThreshold) {
           result = mid
           break
       }else{
         if(square>n) {
             max = mid
         }else{
            min =mid
         }
       }
       index++
    }
    return result
}
console.log(sqrt(10))



/**
 * 查找字符串
 */
function search(dic,word){
  let start = 0
  let end = dic.length -1
  let isFound = false
  while(start<=end) {
    let mid = parseInt((start+end)/2)
    console.log(dic[mid])
    if(dic[mid] === word) {
        isFound = true
        break;
    }
    if(word>dic[mid]) {
        start = mid+1
    }else{
        end = mid-1
    }
  }
  return isFound
}

const data = ["i", "am", "one", "of", "the", "authors", "in", "geekbang"]
data.sort()
console.log(data)
const word = "on"
const found = search(data,word)
if(found){
    console.log(`找到单词${word}`)
}else{
    console.log(`未找到单词${word}`)
}
