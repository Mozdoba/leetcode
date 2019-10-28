/**15. 3Sum
Medium

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
Accepted
682,011
Submissions
2,721,955 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let allTuples = allPossibleTuples(nums);
    let solution = [];
    allTuples.forEach( tuple => {
        if(tupleSumEquals0(tuple)) {
            solution.push(tuple);
        }
    });
    
    return solution;
};

const tupleSumEquals0 = (tuple) => {
    return ((tuple[0] + tuple[1] + tuple[2]) === 0) ? true : false;
};

const threeSumIsUnique = (solution, a, b, c) => {
    for (let i = 0; i < solution.length; i++) {
        let tuple = solution[i];
        if ([tuple[0], tuple[1], tuple[2]].toString() == [a,b,c].toString() ||
            [tuple[0], tuple[1], tuple[2]].toString() == [a,c,b].toString() ||
            [tuple[0], tuple[1], tuple[2]].toString() == [b,a,c].toString() ||
            [tuple[0], tuple[1], tuple[2]].toString() == [b,c,a].toString() ||
            [tuple[0], tuple[1], tuple[2]].toString() == [c,a,b].toString() ||
            [tuple[0], tuple[1], tuple[2]].toString() == [c,b,a].toString()) {
            return false;
        }
    }
    return true;
};

const allPossibleTuples = (nums) => {
    let solution = new Array();
    if (nums.length < 3) {
        return solution;
    }
    let a = nums[0], b = nums[1], c = nums[2];
    for(let a = 0; a < nums.length-2; a++) {
        for(let b = 1; b < nums.length-1; b++) {
            for(let c = 2; c < nums.length; c++) {
                if (a == b || a == c || b == c) {
                    continue;
                }
                if (threeSumIsUnique(solution, nums[a], nums[b], nums[c])) {
                    solution.push([nums[a], nums[b], nums[c]]);
                }
            }
        }
    }
    console.log(solution);
    return solution;
}
