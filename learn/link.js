/**
 * 单向链表查倒数第三项元素
 * 
 * var node = {
 *   val: 0,
 *   next: {
 *			val:1,
 *       next:{
 *         val:2,
 *         next:{
 *           val:7,
 *           next:null
 *         }
 *       }
 *     }
 * }
 */
/***
 * 修改了入参
 */
function findThirdFromLast(node) {
    if (!node || !node.next || !node.next.next) return null
    // 将单向链表反转
    let prev = null, cur = node
    while (cur != null) {
        let temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    // 返回第三项
    console.log('prev===>', JSON.stringify(prev))
    return prev.next.next.val
}

function findThirdFromLast2(node){
    let prev=node,cur = node,i =0
    while(cur){
        if(i===2&&cur.next){
            prev = prev.next
        }
        cur = cur.next
        if(i<2){
         i++
        }
    }
    return prev.val
}


var node = {
    val: 0,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 7,
                next: null
            }
        }
    }
}

// console.log(findThirdFromLast(node))
// console.log(findThirdFromLast({
//     val: 0,
//     next: {
//         val: 1,
//         next: null
//     }
// }))
console.log(findThirdFromLast2(node))