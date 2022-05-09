class LinkedListNode {
  constructor(data,next){
    this.data = data
    this.next = next
  }
  toString(){
    return String(this.data)
  }
}

class LinkedList {
  head = null
  rear = null
  size = 0

  constructor(){
    let node = new LinkedListNode("head",null)
    this.head = node
    this.rear = node
  }

  isEmpty(){
    return this.head === this.rear
  }
}

LinkedList.prototype.toString = function() {
   let node = this.head
   let str = `${node.toString()}`
   node = node.next
   while(node) {
      str += ` --> ${node.toString()}`;;
      node = node.next
   }
   str += ` -->NULL`
   return str
}


LinkedList.prototype[Symbol.iterator] = function(){
  let node = this.head
  return {
    next(){
      node = node.next
      return node ? {
        value:node.data,
        done:false
      }:{value:null,done:true}
    }
  }
}

LinkedList.prototype.getNode = function(index) {
  if(index>=this.size) {
    return null
  }
  let node = this.head
  node = node.next
  for(let i =0;i<index;i++){
    node = node.next
  }
  return node
}

LinkedList.prototype.get = function(index) {
  const result = this.getNode(index)
  return result ? result.data : result
}


LinkedList.prototype.insertHead = function(data) {
  const insertNode = new LinkedListNode(data)
  if(this.size === 0) this.rear = insertNode
  insertNode.next= this.head.next
  this.head.next = insertNode
  this.size ++ 
  return true
}

LinkedList.prototype.insertRear = function(data) {
  const insertNode = new LinkedListNode(data)
  this.rear.next = insertNode
  this.rear = insertNode
  this.size ++ 
  return true
}

LinkedList.prototype.insert = function(data,index) {
  if(index<0 || index>this.size) return false
  if(index===0) return this.insertHead(data)
  if(index===this.size) return this.insertRear(data)
  const insertNode = new LinkedListNode(data)
  const previousNode = this.getNode(index-1)
  insertNode.next = previousNode.next
  previousNode.next = insertNode
  this.size ++ 
  return true
}

LinkedList.prototype.remove = function(index) {
  if(index<0 || index>=this.size) return false
  let previousNode;// 被删除节点的前驱节点
  // 头删，因为我们采用虚拟头节点，所以将头节点指向被删除的节点即可
  if(index === 0){
      previousNode = this.head;
  } else {
      // 获取被删除节点的前一个节点
      previousNode = this.getNode(index-1);
  }
  // 尾删，将尾指针指向新的尾节点
  if(index === this.size-1){
    this.rear = previousNode;
  }
  let removeNode = previousNode.next
  previousNode.next = removeNode.next
  this.size --
  return removeNode
}


const linkList = new LinkedList()
Array.from({length:5}).map((item,index)=>{
 linkList.insertHead(`a${index}`)
})

console.log(linkList.toString())

for(const node of linkList) {
  console.log('value:',node)
}

const linkListRear = new LinkedList()
Array.from({length:6}).map((itm,index)=>{
  linkListRear.insertRear(`r${index}`)
})
console.log(linkListRear.toString())
linkListRear.insert('temp',5)
console.log(linkListRear.toString())
linkListRear.remove(3)
console.log(linkListRear.toString())
for(const node of linkListRear) {
  console.log('rear',node)
}

