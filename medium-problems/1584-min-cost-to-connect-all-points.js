/**
 * 1584. Min Cost to Connect All Points
Medium

FAILED —— 2021-07-06 —— 3h 18m
Tag - Topological Sort - Kruskal's Disjoint Subsets (or Prims)

You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

Example 1:

Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation:

We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.
Example 2:

Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
Example 3:

Input: points = [[0,0],[1,1],[1,0],[-1,1]]
Output: 4
Example 4:

Input: points = [[-1000000,-1000000],[1000000,1000000]]
Output: 4000000
Example 5:

Input: points = [[0,0]]
Output: 0

Constraints:

1 <= points.length <= 1000
-106 <= xi, yi <= 106
All pairs (xi, yi) are distinct.
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
 var minCostConnectPoints = function(points) {
    let N = points.length;
    const buildEdges = (points, E = [], abs = Math.abs) => {
        for (let u = 0; u < N; u++) {
            let [x1, y1] = points[u];
            for (let v = u + 1; v < N; v++) {
                let [x2, y2] = points[v];
                let w = abs(x1 - x2) + abs(y1 - y2);
                E.push([u, v, w]);
            }
        }
        return E.sort(([u1, v1, w1], [u2, v2, w2]) => w1 - w2);
    }
    const E = buildEdges(points);
    let G = [...Array(N).keys()];

    const find = (x) => G[x] = G[x] === x ? x : find(G[x]);
    const union = (a, b) => {
        a = find(a);
        b = find(b);
        if (a === b) return false;
        G[a] = b;
        return true;
    }
    let distances = E.map(([u, v, w]) => union(u, v) ? w : 0);
    let sum = distances.reduce((sum, value) => sum + value, 0);
    return sum;
};

var Kruskals = function(points) {
    let N = points.length;

    class Node {
        constructor(val) {
            this.val = val;
            this.neighbors = [];
        }
    }

    const buildEdges = (points, E = [], abs = Math.abs) => {
        for (let u = 0; u < N; u++) {
            let [x1, y1] = points[u];
            for (let v = u + 1; v < N; v++) {
                let [x2, y2] = points[v];
                let w = abs(x1 - x2) + abs(y1 - y2);
                E.push([u, v, w]);
            }
        }
        return E.sort(([u1, v1, w1], [u2, v2, w2]) => w1 - w2);
    }

    const E = buildEdges(points);

    const buildAdjList = (E) => {
        const adjList = new Array(N).fill().map(() => []);
        for (let i = 0; i < N; i++) {
            adjList[i] = new Node(i);
        }
        return adjList;
    }

    const adjList = buildAdjList(E);
    let G = [...Array(N).keys()];

    const find = (x) => G[x] = G[x] === x ? x : find(G[x]);
    const union = (a, b, w) => {
        a = find(a);
        b = find(b);
        if (a === b) return false;
        G[a] = b;
        adjList[a].neighbors.push([adjList[b], w]);
        adjList[b].neighbors.push([adjList[a], w]);
        return true;
    }
    let distances = E.map(([u, v, w]) => union(u, v, w) ? w : 0);
    let sum = distances.reduce((sum, value) => sum + value, 0);
    return sum;
};

/**
 * Top Algorithm on LeetCode for Kruskal's Algo
 * @param {*} A - points
 * @param {*} E - edges
 * @param {*} abs - Math.abs
 * @returns
 */
let SolutionA = (A, E = [], abs = Math.abs) => {
    let N = A.length;
    let P = [...Array(N).keys()];                               // 🙂 parent representatives of N disjoint sets
    for (let u = 0; u < N; ++u) {
        let [ x1, y1 ] = A[u];
        for (let v = u + 1; v < N; ++v) {
            let [ x2, y2 ] = A[v];
            let w = abs(x1 - x2) + abs(y1 - y2);
            E.push([ u, v, w ]);                                // 🗺 edge u, v with weight w 💰
        }
    }
    E.sort(([u1, v1, w1], [u2, v2, w2]) => w1 - w2);            // ⭐️ sort edges by weight w 💰
    let find = x => P[x] = P[x] == x ? x : find(P[x]);
    let union = (a, b) => {
        a = find(a);
        b = find(b);
        if (a == b)
            return false;
        P[a] = b;                                               // 🎲 arbitrary choice
        return true;
    };
    return _.sum(E.map(([ u, v, w ]) => union(u, v) ? w : 0));  // 🎯 sum of minimum edge weights w 💰 to construct Kruskal's MST
};

// const result = minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]);
const result = Kruskals([[0,0],[2,2],[3,10],[5,2],[7,0]]);
// const result = SolutionA([[0,0],[2,2],[3,10],[5,2],[7,0]]);
console.log(result);