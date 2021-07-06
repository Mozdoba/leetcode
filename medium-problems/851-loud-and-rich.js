/**
Medium

FAILED —— 2021-07-05 —— 2h 45m
Tag - Topological Sort

 *
 * In a group of N people (labelled 0, 1, 2, ..., N-1), each person has different amounts of money, and different levels of quietness.

For convenience, we'll call the person with label x, simply "person x".

We'll say that richer[i] = [x, y] if person x definitely has more money than person y.  Note that richer may only be a subset of valid observations.

Also, we'll say quiet[x] = q if person x has quietness q.

Now, return answer, where answer[x] = y if y is the least quiet person (that is, the person y with the smallest value of quiet[y]), among all people who definitely have equal to or more money than person x.

Example 1:

Input: richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]
Output: [5,5,2,5,4,5,6,7]
Explanation:
answer[0] = 5.
Person 5 has more money than 3, which has more money than 1, which has more money than 0.
The only person who is quieter (has lower quiet[x]) is person 7, but
it isn't clear if they have more money than person 0.

answer[7] = 7.
Among all people that definitely have equal to or more money than person 7
(which could be persons 3, 4, 5, 6, or 7), the person who is the quietest (has lower quiet[x])
is person 7.

The other answers can be filled out with similar reasoning.
Note:

1 <= quiet.length = N <= 500
0 <= quiet[i] < N, all quiet[i] are different.
0 <= richer.length <= N * (N-1) / 2
0 <= richer[i][j] < N
richer[i][0] != richer[i][1]
richer[i]'s are all different.
The observations in richer are all logically consistent.
 */

/**
 * LeetCode Provided Solution
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
 var loudAndRich = function(richer, quiet) {
    const buildGraph = (richer, n) => {
        const adjList = Array(n).fill().map(() => []);

        for (let [rich, poor] of richer) {
            adjList[poor].push(rich);
        }

        return adjList;
    }

    let adjList = buildGraph(richer, quiet.length);
    let answer = Array(quiet.length).fill(-1);

    let dfs = (node) => {
        if (answer[node] === -1) {
            answer[node] = node;
            for (let child of adjList[node]) {
                let candidate = dfs(child);
                if (quiet[candidate] < quiet[answer[node]]) {
                    answer[node] = candidate;
                }
            }
        }
        return answer[node];
    }

    for (let i = 0; i < quiet.length; i++) {
        dfs(i);
    }
    return answer;
};

/**
 * Discussion Solution
 */
var loudAndRichDFS = function(richer, quiet) {
    class Node {
        constructor(val, quiet) {
            this.val = val;
            this.quiet = quiet;
            this.richer = [];
            this.leastQuietRicherNode = null;
            this.visited = false;
        }

        getLeastQuietNode() {
            if (this.visited) return this.leastQuietRicherNode;
            if (!this.leastQuietRicherNode) {
                this.leastQuietRicherNode = this;
            }
            for (let child of this.richer) {
                let leastQuietRicherNode = child.getLeastQuietNode();
                if (leastQuietRicherNode.quiet < this.leastQuietRicherNode.quiet) {
                    this.leastQuietRicherNode = leastQuietRicherNode;
                }
            }
            this.visited = true;
            return this.leastQuietRicherNode;
        }
    }

    const buildGraph = (richer, quiet) => {
        const nodes = [];
        for (let i = 0; i < quiet.length; i++) {
            nodes.push(new Node(i, quiet[i]));
        }
        for (const [rich, poor] of richer) {
            nodes[poor].richer.push(nodes[rich]);
        }
        return nodes;
    }

    const nodes = buildGraph(richer, quiet);
    return nodes.map((node) => node.getLeastQuietNode().val)
}

const result = loudAndRich([[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], [3,2,5,4,6,1,7,0]);
console.log(result);