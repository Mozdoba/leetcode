/**
Easy

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000
 */

 /**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let evenArray = [];
    let oddArray = [];
    
    for (let i = 0; i < A.length; i++) {
        if (isEven(A[i])) {
            evenArray.push(A[i]);
        } else {
            oddArray.push(A[i]);
        }
    }
    
    return evenArray.concat(oddArray);
};

function isEven(number) {
    return (number % 2 == 0) ? true : false;
}
