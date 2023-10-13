class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].map((v) => {
      this.removeEdge(vertex, v);
    });
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong kong");

g.addEdge("Dallas","Tokyo")

g.addEdge("Los Angeles","Tokyo")
g.addEdge("Aspen","Tokyo")

g.removeEdge('Tokyo','Dallas')
g.removeVertex('Tokyo')
console.log(g)
