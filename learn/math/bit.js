function leftShift(val,number) {
 console.log(`${val}(${val.toString(2)})左移${number}位`)
  const result = val<<number
  console.log(`结果：${result}(${result.toString(2)})`)
  return result
}


function rightShift(val,number) {
    console.log(`${val}(${val.toString(2)})右移${number}位`)
    const result = val>>>number
    console.log(`结果:${result}(${result.toString(2)})`)
    return result
}

console.log(leftShift(10,2))

console.log(rightShift(10,2))


/***
 * 字符串相加(大数相加)
 */
function stringAdd(a,b,base) {
    // todo 
    if(typeof a !== 'string' || typeof b !== 'string') {
        throw new Error('参数a,b类型必须是字符串')
    }
    let result = ''
    let aIndex = a.length -1
    let bIndex = b.length -1
    let bit = 0

    while(aIndex>=0 || bIndex>=0) {
       const currentA = +a[aIndex] || 0
       const currentB = +b[bIndex] || 0
       const sum = currentA + currentB + bit
       // 如果大于10或者2时进位
       if(sum>=base){
         bit =1
       }else{
         bit =0
       }
       // 当前结果
        result = sum % base + result
        aIndex--
        bIndex--
    }
    
    if(bit) {
        result = bit + result
    }
    return result  
}

console.log(`字符888888888888888888888和99999999999999相加${stringAdd('888888888888888888888','99999999999999',10)},直接相加${888888888888888888888+99999999999999}`)


function stringSub(a='',b='',base=10) {
    let result = ''
    let aIndex = a.length -1
    let bIndex = b.length -1
    let reduce = 0
    while(aIndex>=0||bIndex>=0) {
      const currentA = +a[aIndex] || 0
      const currentB = +b[bIndex] || 0
      let sub
      if(currentA>=currentB) {
        sub = currentA - currentB - reduce
        reduce = 0
      }else {
        sub = currentA + base - currentB-reduce
        reduce = 1
      }
      result = sub % base + result
      aIndex--
      bIndex--
    }
    return result
}


console.log(`字符888888888888888888888和99999999999999相减${stringSub('888888888888888888888','99999999999999',10)},直接相减${888888888888888888888-99999999999999}`)





/***
 *  位操作
 * 
 * 与 & 或｜ 异或^ 非～
 * 左移<< 末尾补0 数字翻倍
 * 算术右移>> 去掉末尾，符号位补与现在相同的位
 * 逻辑右移>>> 去掉末尾,符号位补0 数字除以2并求整数商
 * 
 */
 
