/**
Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

Accepted
1,031,331
Submissions
3,237,777
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arr1 = traverseLinkedList(l1);
    let arr2 = traverseLinkedList(l2);
    
    let arr3 = addArrays(arr1,arr2);
    arr3 = normalizeArr(arr3);
    return createLinkedList(arr3)
};

function traverseLinkedList(list) {
    let currentNode = list;
    let array = [];
    
    while(currentNode != null) {
        array.push(currentNode.val);
        currentNode = currentNode.next;
    }
    
    return array;
}

function createLinkedList(array) {
    if (array.length === 0 ) {
        return null
    }
    
    let curr = new ListNode(array.shift());
    curr.next = createLinkedList(array)
    
    return curr;
}

function addArrays(arr1, arr2) {
    let resultArr = [];
    let big = (arr1.length >= arr2.length) ? arr1 : arr2;
    let small = (arr2.length <= arr1.length) ? arr2 : arr1;
    let index = 0;
    small.forEach(val => {
       resultArr.push(small[index] + big[index]);
        index++;
    });
    
    resultArr = resultArr.concat(big.slice(index,big.length));
    return resultArr;
}

function normalizeArr(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            if(i == arr.length - 1) {
                arr[i + 1] = 1;
                arr[i] = arr[i] % 10;
            } else {
                arr[i + 1] += 1;
                arr[i] = arr[i] % 10;
            }
        }
    }
    return arr
}

function printArray(array) {
    array.forEach(item => {
       console.log(item); 
    });
}

