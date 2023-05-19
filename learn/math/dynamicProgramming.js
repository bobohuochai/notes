/**
 * 单词最小编辑距离
 */
function minEditLength(str1,str2){
  const d =[]
  for(let i=0;i<str2.length+1;i++){
    const row = new Array(str1.length+1)
    row[0] =i
    d.push(row)
  }
  for(let j=0;j<str1.length+1;j++){
    if(j!==0){
      d[0][j]=j
    } 
  }
  for(let i=1;i<str2.length+1;i++){
      for(let j=1;j<str1.length+1;j++){
        const top = d[i-1][j]+1
        const left =d[i][j-1]+1
        const replce = str2[i-1] === str1[j-1] ? 0:1
        d[i][j] =Math.min(Math.min(top,left),d[i-1][j-1]+replce)
      }
  }
  return d[str2.length][str1.length]
}

console.log(minEditLength('mouse','mouuse'))


/**
 * 总金额100元，可用钱币2，3，7,
 * 找出钱币数量最少的奖赏方式
 * 穷举
 */
// function search(total,currencies,result){
//    if(total===0){
//        console.log(result)
//        return
//    }
//    if(total<0){
//        return
//    }
//    for(let i=0;i<currencies.length;i++){
//      const newResult =[...result]
//      newResult.push(currencies[i])
//      const newTotal = total-currencies[i]
//      search(newTotal,currencies,newResult)
//    }
// }
// search(100,[2,3,7],[])

/**
 * 
 * @param {*} total 总金额
 * @param {*} currencies  币种
 * 动态规划
 * 
 */
function rewards(total,currencies){
    const dis =[]
    const empty = null
    for(let curTotal=1;curTotal<total+1;curTotal++){
        const currentDis = new Array(currencies.length)
        for(let j=0;j<currencies.length;j++){
           if(curTotal-currencies[j]-1>0 
            && dis[curTotal-currencies[j]-1][currencies.length]!==empty){
              currentDis[j] = dis[curTotal-currencies[j]-1][currencies.length]+1
           }else{
             if(curTotal-currencies[j]===0){
                currentDis[j] =1
             }else{
                currentDis[j]=empty
             }
           }
        }
        // 求最小值
        const sortDis = currentDis.filter(curDis=>curDis!==empty).sort((a,b)=>a-b)
        if(sortDis.length){
          currentDis.push(sortDis[0])
        }else{
          currentDis.push(empty)
        }
        console.log(`当前金额${curTotal}，币种数量最小`,currentDis)
        dis.push(currentDis)
    }
    return dis[total-1][currencies.length-1]
}
console.log(rewards(100,[2,3,7]))



function climbStairs(n) {
  const result = []
  result[0] =0
  result[1] =1
  result[2]= 2
  if(n<=2) return result[n]
  for (let i = 3; i <= n; ++i) {
     result[i] = result[i-1]+result[i-2]
  }
  return result[n]
}

console.log(climbStairs(5))




