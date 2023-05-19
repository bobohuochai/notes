function braces(arrs){
   return arrs.map(arr=>{
      return isBalanced(arr)
    })
}

function isBalanced(arr){
 if(arr.length%2 !== 0) return "NO"
 const map = new Map()
 map.set(')','(')
 map.set(']','[')
 map.set('}','{')
 const stack =[]
 for(const char of arr){
    if(!map.has(char)) {
        stack.push(char)
    }else{
      if(stack[stack.length-1]===map.get(char)){
         stack.pop()
      }
    }
 }
 return stack.length?'NO':'YES'
}

console.log(braces(['{}[]()','{()]}','{[}]','{[()]}']))