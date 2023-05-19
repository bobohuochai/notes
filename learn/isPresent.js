/**
 * left<parent<=right
 * @param {} root 
 * @param {*} value 
 */
function isPresent(root,value){
 let node = root
  while(node){
    if(node.value === value) return 1
    if(node.value<value){
      node = node.right
    }else{
      node = node.left
    }
  }
  return 0
}

const bstTree = {
  value:20,
  left:{
    value:10,
    left:{
        value:6
    },
    right:{
        value:12
    }
  },
  right:{
      value:30,
      left:{
          value:25,
      },
      right:{
          value:60
      }
  }
}

console.log(isPresent(bstTree,30),isPresent(bstTree,10),isPresent(bstTree,12),isPresent(bstTree,15))