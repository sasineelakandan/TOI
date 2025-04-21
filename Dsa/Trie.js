class Node{
    constructor(){
      this.childrens={}
      this.isEnd=false
    }
  }
  
  
  class Trie{
  
    constructor(){
      this.root=new Node()
    }
  
    insert(word){
      let curr=this.root
      for(let i=0;i<word.length;i++){
        if(!curr.childrens[word[i]]){
          curr.childrens[word[i]]=new Node()
        }
        curr=curr.childrens[word[i]]
      }
      curr.isEnd=true
    }
  
    commonPrifix(){
      let curr=this.root
      let prifix=''
      while(curr&&!curr.isEnd&&Object.keys(curr.childrens).length===1){
        let nextValue=Object.keys(curr.childrens)[0]
        prifix+=nextValue
        curr=curr.childrens[nextValue]
      }
      return prifix
    }
  
    wordSuggession(prefix=''){
      
      let arr=[]
      let curr=this.root
      for(let i=0;i<prefix.length;i++){
        if(!curr.childrens[prefix[i]]){
          return arr
        }
        curr=curr.childrens[prefix[i]]
      }
  
      function dfs(node,path){
       if(node.isEnd)arr.push(path)
        for(let char in node.childrens){
             dfs(node.childrens[char],path+char)
        }
      }
      dfs(curr,prefix)
      return arr
    }
   
  }
  
  const trie=new Trie()
  
  trie.insert('sasi')
  trie.insert('saran')
  trie.insert('santhosh')
  trie.insert('sathish')
  
  console.log(JSON.stringify(trie.wordSuggession('lll')))