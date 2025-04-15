class Node{

    constructor(val){
      this.val=val
      this.left=null
      this.right=null
    }
  }
  
  
  class Bst{
   
    constructor(){
      this.root=null
  
    }
  
    insert(val){
       let node= new Node(val)
      if(this.root==null){
        this.root=node
         return
      }else{
        let curr=this.root
        while(true){
          if(curr.val>val){
            if(curr.left==null){
              curr.left=node
              return
            }else{
              curr=curr.left
            }
           
          }else{
            
            if(curr.right==null){
              curr.right=node
              return
            }else{
              curr=curr.right
            }
          }
        }
      }
  
    }
    
    hightOf(node=this.root){
      if(!node)return 0
      
      const leftNode=this.hightOf(node.left)
  
      const rightNode=this.hightOf(node.right)
  
      return 1+Math.max(leftNode,rightNode)
  
    }
  
    isBalance(node=this.root){
      
      if(!node)return true
      
      const leftNode=this.hightOf(node.left)
  
      const rightNode=this.hightOf(node.right)
  
      if(Math.abs(leftNode-rightNode)>1){
        return false
      }
      
      return this.isBalance(node.left)&&this.isBalance(node.right)
  
    }
  
    bfs(){
      let data=[]
      let queue=[this.root]
      while(queue.length){
        let node=queue.shift()
        data.push(node.val)
        if(node.left){
          queue.push(node.left)
        }
        if(node.right){
          queue.push(node.right)
        }
      }
      return data
    }
  
    dfs(){
      let data=[]
      let curr=this.root
      function travisol(node){
        data.push(node.val)
        if(node.left)travisol(node.left)
        if(node.right)travisol(node.right)
      }
     travisol(curr)
  
     return data
    }
  
    noofleafNode(node=this.root){
      if(!node)return 0
      
      if(!node.left&&!node.right) return 1
    
      return this.noofleafNode(node.left)+this.noofleafNode(node.right)
      
    }
  
    nocountsingle(node=this.root){
      if(!node)return 0
      let count=0
      if((!node.left&&node.right)||(!node.right&&node.left)){
        count=1
      }
    
      return count+this.nocountsingle(node.left)+this.nocountsingle(node.right)
  
    }
  
    findLargest(k){
      let count=0
      let curr=this.root
       let res=0
      function travisol(node){
        if(!node) return
         
        if(node.right)travisol(node.right)
          count++
          if(count==k){
            res=node.val
            return
          }
        if(node.left)travisol(node.left)
          
      }
     travisol(curr)
  
     return res
    }
  
    nodeDelete(val,node){
  
      if(!node)return null
  
     
  
      if(node.val>val){
        node.left=this.nodeDelete(val,node.left)
      }else if(node.val<val){
        node.right=this.nodeDelete(val,node.right)
      }else{
        if(!node.left) return node.right
        if(!node.right) return node.left
  
        let minNode=this.getMinode(node.rigth)
         node.val=minNode.val
         node.right=this.nodeDelete(minNode.val,node.right)
      }
  
  
      return node
  
      
        
      
       
    }
  
    getMinode(node){
      while(node.left){
        node=node.left
      }
      return node
    }
  
    findNode(val){
      let curr=this.root
       while(curr){
        if(curr.val==val){
          return curr
        }
        if(curr.val>val){
          curr=curr.left
        }else{
          curr=curr.right
        }
       }
    }
  
    degeree(node=this.root){
      if(!node)return 
      let degeree=0
      if(node.left)degeree++
      if(node.right)degeree++
      return degeree
    }
  }
  
  
  const bst= new Bst()
  
  bst.insert(10)
  bst.insert(20)
  bst.insert(30)
  bst.insert(40)
  bst.insert(50)
  console.log(bst.hightOf())
  console.log(bst.isBalance())
  console.log(bst.dfs())
  
  console.log(bst.degeree())
  
  console.log(JSON.stringify(bst.root))
  