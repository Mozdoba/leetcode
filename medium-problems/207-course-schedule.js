/**
207. Course Schedule
Medium

FAILED —— 2021-06-30 —— 49m 40s
Tag - Topological Sort

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


Constraints:

1 <= numCourses <= 105
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    const visited = new Set();
    const visiting = new Set();
    const adjList = buildAdjList(numCourses, prerequisites);

    for (let i = 0; i < numCourses; i++) {
        if (!dfsIsCycle(i)) return false;
    }

    function dfsIsCycle(v) {
        if (visited.has(v)) return true;
        if (visiting.has(v)) return false; // found a cycle

        visiting.add(v);
        for (const adj of adjList[v]) {
            if (!dfsIsCycle(adj)) return false;
        }

        visiting.delete(v);
        visited.add(v);
        return true;
    }
    return true;
};

/**
 * Builds an Array of Arrays
 *
 * @param {*} numCourses - the number of courses
 * @param {*} prerequisites - an array of key-value pairs showing relationships between course & prerequisite
 * @returns
 */
const buildAdjList = (numCourses, prerequisites) => {
    const adjList = Array(numCourses).fill().map(() => []);

    for (let [u, v] of prerequisites) {
        adjList[v].push(u);
    }

    return adjList;
}

console.log(canFinish(2, [[0,1]]));

// DON'T USE MATRICES. THEY ARE TOO HEAVY W/ SPACE COMPLEXITY
// USE ADJACENCY LIST INSTEAD
let buildMatrix = (numCourses, prerequisites) => {
    let matrix = Array(numCourses).fill().map(() => Array(numCourses).fill(0));
    let inDegree = new Array(numCourses).fill(0);

    for (let i = 0; i < prerequisites.length; i++) {
        let course = prerequisites[i][0];
        let prereq = prerequisites[i][1];
        // add an edge from prereq to course (this is an indegree)
        // an out-degree would be an edge from course to prereq
        matrix[prereq][course]++;
        inDegree[prerequisites[i][0]]++;
    }
    return [matrix, inDegree];
}

