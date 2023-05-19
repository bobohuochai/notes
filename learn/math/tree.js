

/**
 * Initialize your data structure here.
 */
 var Trie = function() {
  this.next = new Map()
  this.end = 0
  this.path =0 
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  if(!word || word==='') return
  let node = this
  for(const char of word){
    if(!node.next.get(char)){
       node.next.set(char,new Trie())
    }
    node= node.next.get(char)
    node.path++
  }
  node.end++
};

Trie.prototype.delete = function(word){
if(!word || word === '') return
 let node = this
 for(const char of word){
   if(node.next.get(char)){
       if(--node.next.path === 0){
          node.next.delete(char)
          return
       }else{
          node = node.next.get(char)
       }
   }
 }
 node.end--
}

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  if(!word || word==='') return false
  let isFound = true
  let node = this
  for(const char of word){
    if(!node.next.get(char)){
       isFound = false 
       break
    }else{
      node = node.next.get(char)
    }
  }
  if(!isFound || node.end ===0){
    return false
  }else{
    return true
  }
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  if(!prefix || prefix ==='') return false
  let isFound = true
  let node = this
  for(const char of prefix){
    if(!node.next.get(char)){
       isFound = false 
       break
    }else{
      node = node.next.get(char)
    }
  }
  return isFound
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/