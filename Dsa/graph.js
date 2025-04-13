class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdges(v1, v2) {
      if (!this.adjacencyList[v1]) this.addVertex(v1);
      if (!this.adjacencyList[v2]) this.addVertex(v2); // fixed here
  
      this.adjacencyList[v1].push(v2); // fixed here
      this.adjacencyList[v2].push(v1); // fixed here
    }
  
    bfs(start){
      
      let queue=[start]
      let visited={}
      let data=[]
      visited[start]=true
      while(queue.length){
        let curr=queue.shift()
        data.push(curr)
        this.adjacencyList[curr].forEach((val)=> {
          if(!visited[val]){
            visited[val]=true
            queue.push(val)
          }
        });
      }
      return data
    }
  
    dfs(start){
      
      let stack=[start]
      let visited={}
      let data=[]
      visited[start]=true
      while(stack.length){
        let curr=stack.pop()
        data.push(curr)
        this.adjacencyList[curr].forEach((val)=> {
          if(!visited[val]){
            visited[val]=true
            stack.push(val)
          }
        });
      }
      return data
    }
  }
  
  const graph = new Graph();
  
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  
  graph.addEdges('A', 'B');
  graph.addEdges('B', 'C');
  graph.addEdges('A', 'C');
  console.log(graph.dfs('B'))
  console.log(graph.adjacencyList);
  