/**
Easy

Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
 */

 /**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let B = [];
    A.forEach( number => {
       B.push(number * number); 
    });
    return B.sort(function(a,b) { return a - b });
    //return quickSort(B, 0, A.length - 1);
};

function quickSort(array, left, right) {
    if (left >= right) {
        return;
    }
    let pivot = array[(left + right) /2];
    let pIndex = partition(array, left, right, pivot);
    quickSort(array, left, pIndex - 1);
    quickSort(array, pIndex + 1, right);
}

function partition(array, left, right, pivot) {
    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        
        if (left <= right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }

    }
    return left;
}