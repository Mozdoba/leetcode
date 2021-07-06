/**
 *
 * 1786. Number of Restricted Paths From First to Last Node
Medium

FAILED —— 2021-07-05 —— 3h 18m
Tag - Topological Sort - Dijkstra

There is an undirected weighted connected graph. You are given a positive integer n which denotes that the graph has n nodes labeled from 1 to n, and an array edges where each edges[i] = [ui, vi, weighti] denotes that there is an edge between nodes ui and vi with weight equal to weighti.

A path from node start to node end is a sequence of nodes [z0, z1, z2, ..., zk] such that z0 = start and zk = end and there is an edge between zi and zi+1 where 0 <= i <= k-1.

The distance of a path is the sum of the weights on the edges of the path. Let distanceToLastNode(x) denote the shortest distance of a path between node n and node x. A restricted path is a path that also satisfies that distanceToLastNode(zi) > distanceToLastNode(zi+1) where 0 <= i <= k-1.

Return the number of restricted paths from node 1 to node n. Since that number may be too large, return it modulo 109 + 7.



Example 1:


Input: n = 5, edges = [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]
Output: 3
Explanation: Each circle contains the node number in black and its distanceToLastNode value in blue. The three restricted paths are:
1) 1 --> 2 --> 5
2) 1 --> 2 --> 3 --> 5
3) 1 --> 3 --> 5
Example 2:


Input: n = 7, edges = [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]]
Output: 1
Explanation: Each circle contains the node number in black and its distanceToLastNode value in blue. The only restricted path is 1 --> 3 --> 7.


Constraints:

1 <= n <= 2 * 104
n - 1 <= edges.length <= 4 * 104
edges[i].length == 3
1 <= ui, vi <= n
ui != vi
1 <= weighti <= 105
There is at most one edge between any two nodes.
There is at least one path between any two nodes.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var countRestrictedPaths = function(n, edges) {
    class Node {
        constructor(val) {
            this.val = val;
            this.neighbors = [];
            this.distance = Infinity;
            this.visited = false;
        }
    }

    const buildGraph = (n, edges) => {
        const adjList = new Map();
        const unvisited = [];

        for (let i = 1; i <= n; i++) {
            let node = new Node(i);
            if (i == n) node.distance = 0;
            adjList.set(i, node);
            unvisited.push(node);
        }

        for (const [u, v, weight] of edges) {
            const nodeU = adjList.get(u);
            const nodeV = adjList.get(v);
            nodeU.neighbors.push([nodeV, weight]);
            nodeV.neighbors.push([nodeU, weight]);
        }

        return [adjList, unvisited];
    }

    const [adjList, unvisited] = buildGraph(n, edges);

    const dijkstra = (adjList, unvisited) => {
        while (unvisited.length) {
            unvisited.sort((a,b) => a.distance - b.distance);
            let closest = unvisited.shift();

            for (const [neighbor, weight] of adjList.get(closest.val).neighbors) {
                neighbor.distance = Math.min(neighbor.distance, closest.distance + weight);
            }
        }
    }

    dijkstra(adjList, unvisited);

    const mod = 1000000007;
    let ans = 0;
    const visiting = new Map();
    const visited = new Map();

    const dfs = (node) => {
        // TODO: traverse to N counting all the times node.distance > adj.distance
    }

    return dfs(adjList.get(1));
};

// const result = countRestrictedPaths(7,
//     [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]]);
const result = countRestrictedPaths(5,
[[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]);
console.log(result);
