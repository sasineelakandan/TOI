
class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}


class Bt{
    constructor(){
        this.root=null
    }

    insert(val){
      let node=new Node(val)
      if(this.root==null){
        this.root=node
        return
      }else{
        let queue=[this.root]
        while(queue.length){
            let curr=queue.shift()
            if(curr.left==null){
                curr.left=node
                return
            }else{
                queue.push(curr.left)
            }

            if(curr.right==null){
                curr.right=node
                return
            }else{
                queue.push(curr.right)
            }
        }
      }
    }
    bfs(){
        
        let queue=[this.root]
        let data=[]
        while(queue.length){
          let node=queue.shift()
          data.push(node.val)
          if(node.left)queue.push(node.left)
          if(node.right)queue.push(node.right)
        }
    return data

    }

    hightOf(node=this.root){
      if(!node)return 0
      let leftNode=this.hightOf(node.left)
      let rightNode=this.hightOf(node.right)
      return 1+Math.max(leftNode,rightNode)
    }
  depth(){
    let depths={}
    function travisol(node,depth){
        if(!node)return 
      
      depths[node.val]=depth
      if(node.left)travisol(node.left,depth+1)
      if(node.right)travisol(node.right,depth+1)
    }

    travisol(this.root,0)
    return depths
}
}

const bt=new Bt()

bt.insert(10)
bt.insert(20)
bt.insert(30)
bt.insert(40)
bt.insert(50)
console.log(bt.hightOf())
console.log(JSON.stringify(bt.root))