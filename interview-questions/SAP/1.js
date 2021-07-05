/**
 * SAP Interview
 * Q: You're given an unsorted array of integers,
 * where every integer appears exactly twice,
 * except for one integer, which appears only once.
 * Write a function that finds the integer that appears only once.
 *
 * [1, 4, 1, 16, 3, 4, 16] 3 is missing
*/


// Time Complexity O(n) because iterating through nums
// O(n) using Map
const solution = (nums) => {
    let map = new Map();
    // populating map [num -> count]
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
        else map.set(nums[i], 1);
    }
    return Array.from(map.entries()).map(([k,v]) => {
        if (v === 1) return k;
    }).filter((defined) => defined);
}

const solution = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums.splice())
        nums.includes();
    }
}


// [1,1, 2,2, 3, 4,4]
// O(nlog(n)) Time Complexity
// O(n) Space Complexity

const solutionSort = (nums) => {
    nums.sort((a,b) => a-b);
    // populating map [num -> count]
}

const solutionBest = (nums) => {
    //for constant time complexity & space complexity
    // iteraterate through the array
    // splicing out the number array.splice(i, 1)
    // then check if array.includes(num)
}

solution();