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
        let node=new Node(val)
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
    dfs(){
        let curr=this.root
        let data=[]
        function travisol(node){
          data.push(node.val)
          if(node.left)travisol(node.left)
            if(node.right)travisol(node.right)
        }
        travisol(curr)

        return data
    }

    bfs(){
        
        let data=[]
        let queue=[this.root]
        while(queue.length){
          let node=queue.shift()
          data.push(node.val)
          if(node.left)queue.push(node.left)
          if(node.right)queue.push(node.right)
        }

        return data
    }

    hightOfnode(node=this.root){
      
        if(node==null){
            return 0
        }

        let leftNode= this.hightOfnode(node.left)
        let rightNode= this.hightOfnode(node.right)

        return 1+Math.max(leftNode,rightNode)
    }

    balancetree(node){
      
        if(node==null){
            return true
        }

        let leftNode= this.hightOfnode(node.left)
        let rightNode= this.hightOfnode(node.right)

        if(Math.abs(leftNode-rightNode)>1){
            return false
        }

       return this.balancetree(node.left)&&this.balancetree(node.right)
    }

    deleteNode(val,node){
        if(node==null){
            return null
        }

        if(node.val>val){
            node.left= this.deleteNode(val,node.left)
        }else if(node.val<val){
            node.right= this.deleteNode(val,node.right)
        }else{

            if(!node.left&&!node.right){
                return null
            }

            if(!node.left)return node.right
            if(!node.right)return node.left


            let minode=this.getminNode(node.right)
            node.val=minode.val
            node.right=this.deleteNode(minode.val,node.right)
        }

        return node
    }

    getminNode(node){
        while(node.left){
            node=node.left
        }
        return node
    }

    findlargest(k) {
        let count = 0;
        let res = null;
        let curr = this.root;
    
        function travisol(node) {
            if (!node || count >= k) return;
    
            travisol(node.right);
            
            count++;
            if (count === k) {
                res = node;
                return;
            }
    
            travisol(node.left);
        }
    
        travisol(curr);
        return res;
    }
}


let bst=new Bst()

bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(50)
let node=bst.findlargest(5)
console.log(node.val)
// bst.deleteNode(10,bst.root)
console.log(JSON.stringify(bst.root))