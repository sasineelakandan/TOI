class Node{
    constructor(val){
      this.val=val
      this.next=null

    }
}


class Linkedlist{
     constructor(){
        this.head=null
        this.tail=null
        this.size=0
     }

     append(val){
      let node=new Node(val)
      if(this.size==0){
        this.head=node
      }else{
        this.tail.next=node

      }
      this.tail=node
      this.size++
     }

     prepend(val){
    let node=new Node(val)
    if(this.size==0){
        this.tail=node
      }else{
        node.next=this.head

      }
      this.head=node
      this.size++
     }

     reverse(){
        let curr=this.head
        let prev=null
        while(curr!=null){
            let temp=curr.next
            curr.next=prev
            prev=curr
            curr=temp

        }

        this.head=prev
     }

     mid(){

        let slow=this.head
        let fast=this.head
        while(slow!=null&&fast.next!=null){
            slow=slow.next
            fast=fast.next.next
        }

        let val=slow.val

        let curr=this.head
        while(curr.next!=null){
            if(curr.next.val==val){
                curr.next=curr.next.next
                this.size--
            }
            curr=curr.next
        }
     }

     delete(val){
       
        if(this.head.val==val){
            this.head=this.head.next
            this.size--
        }

        let curr=this.head
        while(curr.next!=null){
            if(curr.next.val==val){
                curr.next=curr.next.next
                this.size--
            }
            curr=curr.next
        }
     }

     merge(l){
        let curr=this.head

        while(curr.next!=null){
            curr=curr.next
        }
        curr.next=l.head
     }

     sum(){
        let val=this.head.val
        let val2=this.head.next.val
        let val3=this.tail.val
        let val4=0
        

        let curr=this.head
        while(curr.next!=null){
            if(curr.next.val==val3){
                val4=curr.val
            }
            curr=curr.next
        }
       
        let sum=val+val2+val3+val4
        
        
     }

     bubbleSort(){
        let swap
        
       do{
         let swap=false
         let curr=this.head
         while(curr&&curr.next){
            if(curr.val>curr.next.val){
                let temp=curr.val
                curr.val=curr.next.val
                curr.next.val=temp
                swap=true
            }
            curr=curr.next
         }
       }while(swap)
     }


}


const list=new Linkedlist()
const list1=new Linkedlist()

list.prepend(100)
list.prepend(50)
list.prepend(30)
list.prepend(70)
list.prepend(20)
// list.reverse()
// list.mid()
// list.delete(30)
// list1.prepend(10)
// list1.prepend(20)
// list1.prepend(30)
// list1.prepend(40)
// list1.prepend(50)
// list.merge(list1)
list.bubbleSort()
console.log(JSON.stringify(list.head))