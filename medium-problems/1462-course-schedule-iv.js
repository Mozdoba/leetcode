/**
 * 1462. Course Schedule IV
Medium

FAILED —— 2021-07-05 —— Didn't solve
Tag - Topological Sort

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you should answer whether the course uj is a prerequisite of the course vj or not. Note that if course a is a prerequisite of course b and course b is a prerequisite of course c, then, course a is a prerequisite of course c.

Return a boolean array answer, where answer[j] is the answer of the jth query.

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
Output: [false,true]
Explanation: course 0 is not a prerequisite of course 1 but the opposite is true.
Example 2:

Input: numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]
Output: [false,false]
Explanation: There are no prerequisites and each course is independent.
Example 3:


Input: numCourses = 3, prerequisites = [[1,2],[1,0],[2,0]], queries = [[1,0],[1,2]]
Output: [true,true]


Constraints:

2 <= numCourses <= 100
0 <= prerequisite.length <= (numCourses * (numCourses - 1) / 2)
0 <= ai, bi < n
ai != bi
All the pairs [ai, bi] are unique.
The prerequisites graph has no cycles.
1 <= queries.length <= 104
0 <= ui, vi < n
ui != vi
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
 var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    class Course {
        constructor(val) {
            this.val = val;
            this.nextCourses = new Set();
            this.visited = false;
        }

        isNextCourse(course) {
            if (this.visited) return this.nextCourses.has(course);
            if (this.nextCourses.has(course)) return true;

            for (const nextCourse of this.nextCourses.values()) {
                let isNextCourseDownTheLine = nextCourse.isNextCourse(course)
                if (isNextCourseDownTheLine) {
                    this.nextCourses.add(course);
                    return true;
                }
            }

            this.visited = true;
            return false;
        }
    }

    const buildGraph = (numCourses, prerequisites) => {
        const courses = new Map();
        for (let i = 0; i < numCourses; i++) {
            courses.set(i, new Course(i));
        }

        for (const [prereq, course] of prerequisites) {
            courses.get(course).nextCourses.add(courses.get(prereq));
        }
        return courses;
    }

    const bfsHasNextCourse = (first, target) => {
        const queue = [first];
        first.visited = true;
        while (queue.length !== 0) {
            let curr = queue.shift();
            if (curr.nextCourses.has(target)) return true;
            for (const course of curr.nextCourses.values()) {
                if (!course.visited) {
                    course.visited = true;
                    queue.push(course);
                }
            }
        }

        return false;
    }

    const courses = buildGraph(numCourses, prerequisites);
    let answer = queries.map(([prereq, course]) => bfsHasNextCourse(courses.get(course), courses.get(prereq)));
    return answer;
};

const result = checkIfPrerequisite(
    5,
    [[0,1],[1,2],[2,3],[3,4]],
    [[0,4],[4,0],[1,3],[3,0]]);

console.log(result);