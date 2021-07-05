/**
 * 802. Find Eventual Safe States
Medium

FAILED —— 2021-07-04 —— 49m 40s
Tag - Topological Sort

We start at some node in a directed graph, and every turn, we walk along a directed edge of the graph. If we reach a terminal node (that is, it has no outgoing directed edges), we stop.

We define a starting node to be safe if we must eventually walk to a terminal node. More specifically, there is a natural number k, so that we must have stopped at a terminal node in less than k steps for any choice of where to walk.

Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

The directed graph has n nodes with labels from 0 to n - 1, where n is the length of graph. The graph is given in the following form: graph[i] is a list of labels j such that (i, j) is a directed edge of the graph, going from node i to node j.

Example 1:

Illustration of graph
Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
Explanation: The given graph is shown above.
Example 2:

Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
Output: [4]


Constraints:

n == graph.length
1 <= n <= 104
0 <= graph[i].legnth <= n
graph[i] is sorted in a strictly increasing order.
The graph may contain self-loops.
The number of edges in the graph will be in the range [1, 4 * 104].
 */

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
 var eventualSafeNodes = function(graph) {
    let adjList = buildGraph(graph);
    let visited = Array(graph.length).fill(false);
    let visiting = Array(graph.length).fill(false);

    const safeNodes = new Set();
    for (let i = 0; i < graph.length; i++) {
        if (!dfsIsCycle2(i, visited, visiting)) {
            safeNodes.add(i);
        }
    }

    function dfsIsCycle(node) {
        if (visited[node]) return false;
        if (visiting[node]) return true;

        visiting[node] = true;
        for (let neighbor of adjList[node]) {
            if (dfsIsCycle(neighbor)) {
                return true;
            }
        }
        visiting[node] = false;
        visited[node] = true;
        return false;
    }

    function dfsIsCycle2(first, visited, visiting) {
        const stack = [];
        stack.push(first);

        while (stack.length != 0) {
            let node = stack.pop();
            visiting[node] = true;
            for (let neighbor of adjList[node]) {
                if (visiting[neighbor]) return true; // found cycle
                if (!visited[neighbor]) stack.push(neighbor);
            }
            visiting[node] = false;
            visited[node] = true;
        }
        return false;
    }

    return Array.from(safeNodes).sort((a,b) => a-b);
};

const buildGraph = (graph) => {
    let adjList = Array(graph.length).fill().map(() => []);

    for (let i = 0; i < graph.length; i++) {
        for (let node of graph[i]) {
            adjList[i].push(node);
        }

    }
    return adjList;
}

const result = eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]);
console.log(result);