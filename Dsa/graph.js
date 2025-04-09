

class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v]=[]
        }
    }

    addEddges(v1,v2){
      if(!this.adjacencyList[v1])this.addVertex(v1)
      if(!this.adjacencyList[v2])this.addVertex(v2)
      this.adjacencyList[v1].push(v2)
      this.adjacencyList[v2].push(v1)
    }
}



const graph=new Graph()

graph.addVertex('A')

graph.addVertex('B')
graph.addVertex('C')

graph.addEddges('A','B')
graph.addEddges('B','C')
graph.addEddges('A','C')
console.log(graph.adjacencyList)
