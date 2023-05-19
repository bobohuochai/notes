/**
 * /**
 * --- 题目描述 ---
 *
 * 补充函数的 TODO 部分，模拟 lodash 中的 _.get() 函数。
 *
 * --- 测试用例 ---
 *
 * 输入：
 * const obj = { selector: { to: { toutiao: "FE Coder"} }, target: [1, 2, { name: 'byted'}]};
 * get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
 * 输出：
 * ['FE coder', 1, 'byted']
 */
function get(obj,...paths){
  if(!obj || !paths){
      return
  }
  const result =[]
  for(const path of paths){
     console.log('current path',path)
     // .split
     const dotSplits = path.split('.')
     console.log('path dot split',dotSplits)
     let propResult = obj
     for(const prop of dotSplits){
        console.log('prop====>',prop)
        // 对象 或者 数组
        if(prop.includes('[')&&prop.includes(']')){
           const start = prop.indexOf('[')
           const end = prop.indexOf(']')
           console.log('arr start end',start,end)
           const objProp = prop.substring(0,start)
           const arrIndex = prop.substring(start+1,end)
           console.log('arr Indx',arrIndex)
           propResult = propResult[objProp]
           propResult = propResult[arrIndex]
           console.log('arr result',propResult)
        }else{
          propResult = propResult[prop]
          console.log(`obj result`,propResult)
        }
     }
     result.push(propResult)
  }
  return result
}
const obj = { selector: { to: { toutiao: "FE Coder"} }, target: [1, 2, { name: 'byted'}]};
console.log(get(obj,'selector.to.toutiao','target[0]', 'target[2].name'))