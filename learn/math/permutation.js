
/***
 * 田忌赛马
 */
function permutation(houses,result){
   if(houses.length ===0) {
       console.log('t===>',JSON.stringify(result))
       compare(q,result)
       return 
   }
   for(let i=0;i<houses.length;i++){
      const newResult = [...result]
      newResult.push(houses[i])
      
      const resthouses = [...houses]
      resthouses.splice(i,1)
      
      permutation(resthouses,newResult)
   }
   
}

const q = []
q.push({name:'q1',time:1.0})
q.push({name:'q2',time:2.0})
q.push({name:'q3',time:3.0})



const t = []
t.push({name:'t1',time:1.5})
t.push({name:'t2',time:2.5})
t.push({name:'t3',time:3.5})



function compare(q,t) {
  let t_win_count = 0
  for(let i=0;i<q.length;i++){
      if(q[i].time>t[i].time){
          t_win_count++
      }
  }
  if(t_win_count>parseInt(q.length/2)){
     console.log('田忌获胜')
  } else{
    console.log('齐王获胜')
  }
}

permutation(t,[])
