/**
 * 纸张面额大小 1,2,5,10
 * 穷举
 */
const choices = [1,2,5,10]
function get(total,result=[]) {
  if(total ===0 ){
      console.log(JSON.stringify(result))
      return
  }
  else if(total<0){
      return
  }else{
    for(let i =0;i<choices.length;i++){
        const newResult = [...result]
        newResult.push(choices[i])
        get(total-choices[i],newResult)
     }
  }
}
get(10)


/**
 * 归并排序
 */
function mergeSort(arr){
    if(!arr){
        return []
    }
    if(arr.length === 1) {
      return arr
    }
    const mid = parseInt(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    const newleftAr= mergeSort(leftArr,'left')
    const newrightArr= mergeSort(rightArr,'right')
    const sortArr = merge(newleftAr,newrightArr)
    return sortArr
}

function merge(l,r){
  const m =[]
  let li=0
  let ri=0
  let mi=0
  while(li<l.length && ri<r.length){
    if(l[li]<=r[ri]) {
     m[mi] =l[li]
     li++
    }else{
     m[mi]=r[ri]
     ri++
    }
    mi++
  }
  // copy剩余左右数组
  if(li>=l.length) {
      for(let rIndex=ri;rIndex<r.length;rIndex++){
            m[mi] = r[rIndex]
            mi++
      }
  } else {
      for(let lIndex=li;lIndex<l.length;lIndex++){
          m[mi]=l[lIndex]
          mi++
      }
  }
  console.log('index===>',m)
  return m
}
console.log(mergeSort([3434,98,12332,9004,883443,12],'init'))