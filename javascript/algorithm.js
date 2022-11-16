function mergeSort(items){
    if(items.length === 1){
        return items
    }
    const middle = Math.floor(items.length/2)
    const left = items.slice(0,middle)
    const right = items.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
    console.log('left,right',left,right)
    const result = []
    while(left.length>0&& right.length>0){
        if(left[0]>right[0]){
            result.push(right.shift())
        }else {
            result.push(left.shift())
        }
    }
    return result.concat(left).concat(right)
}


console.log(mergeSort([3,1,9,10,7,2]))