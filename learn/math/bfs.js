/**
 * 用户 id
 * @param {*} id 
 */
function Node(id){
    this.userId = id
    // 与被查找user的友好程度
    this.degree = 0
    this.friends = []
}

/**
 * 用随机数初始化用户关系
 */
const users = []
function create(){
  for(let i=0;i<30;i++){
     users[i] = new Node(i) 
  }

  for(let i=0;i<100;i++){
     const randomA = parseInt(30*Math.random())
     const randomB = parseInt(30*Math.random())
     if(randomB === randomA) continue
     users[randomA].friends.push(randomB)
     users[randomB].friends.push(randomA)
  }
  console.log(JSON.stringify(users))
}
create()

/**
 * 广度优先遍历
 */
function bfs(users,userId){
   if(userId>=users.length) return
   const queue = []
   const visited =[]
   queue.push(userId)
   visited.push(userId)
   while(queue.length){
     const userId = queue.shift()
     for(let friId of users[userId].friends){
         if(visited.includes(friId)) continue
         queue.push(friId)
         visited.push(friId)
         users[friId].degree = users[userId].degree +1
         console.log(`${users[friId].degree},${friId}`)
     }
   }
}

bfs(users,2)