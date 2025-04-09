class Heap{
    constructor(){
        this.heap=[]
    }

    insert(val){
        this.heap.push(val)
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(idx){
        let parentIdx=Math.floor((idx-1)/2)
        if(idx>0&&this.heap[parentIdx]<this.heap[idx]){
            [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
            this.bubbleUp(parentIdx)
        }
    }

    remove(){
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.bubbleDown(0)
        return max
    }

    bubbleDown(idx){
     let parentIdx=idx
     let leftidx=2*idx+1
     let rightidx=2*idx+2
     if(leftidx<this.heap.length&&this.heap[parentIdx]<this.heap[leftidx]){
        parentIdx=leftidx
     }
     if(rightidx<this.heap.length&&this.heap[parentIdx]<this.heap[rightidx]){
        parentIdx=rightidx
     }

     if(parentIdx!=idx){
        [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
        this.bubbleDown(parentIdx)
     }
    }
}


const heap=new Heap()

heap.insert(10)
heap.insert(20)
heap.insert(30)
heap.insert(40)
heap.insert(50)
heap.remove()
heap.remove()
heap.remove()
console.log(heap.heap)