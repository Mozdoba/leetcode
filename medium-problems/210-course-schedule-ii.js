/**
 * 210. Course Schedule II
Medium

FAILED —— 2021-07-02 —— 49m 40s
Tag - Topological Sort

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
Example 2:

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
Example 3:

Input: numCourses = 1, prerequisites = []
Output: [0]


Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
All the pairs [ai, bi] are distinct.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    const adjList = buildAdjList(numCourses, prerequisites);
    const visited = new Set();
    const visiting = new Set();

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }

    return Array.from(visited).reverse(); //topological sorted order is the reverse of visited order

    function dfs(v) {
        if (visited.has(v)) return true;
        if (visiting.has(v)) return false; // found a cycle

        visiting.add(v);

        for (const adj of adjList[v]) {
            if (!dfs(adj)) return false;
        }

        visiting.delete(v);
        visited.add(v);
        return true;
    }
};

const buildAdjList = (numCourses, prerequisites) => {
    const adjList = Array(numCourses).fill().map(() => []);

    for (const [adj, v] of prerequisites) {
        adjList[v].push(adj)
    }

    return adjList;
}

const result = findOrder(2, [[1,0]]);
console.log(result);
