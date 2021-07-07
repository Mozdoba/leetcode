/**
 * 109. Convert Sorted List to Binary Search Tree
Medium

FAILED —— 2021-07-06 —— 20m 43s
Tag - Binary Search Tree

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [0]
Output: [0]
Example 4:

Input: head = [1,3]
Output: [3,1]


Constraints:

The number of nodes in head is in the range [0, 2 * 104].
-105 <= Node.val <= 105

 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 *
 * @param {ListNode} head
 * @return {TreeNode}
 */
 var sortedListToBST = function(head) {
    if (!head) return null;
    return toBST(head, null);
};

/**
 * Implement Solution using Runner and Walking pointers (Fast & Slow) to iterate through the nodes
 * @param {} head
 * @param {*} tail
 * @returns
 */
const toBST = (head, tail) => {
    let fast = head, slow = head;
    if (head == tail) return null;

    // iterate until fast === null || fast === last midpoint
    // iterate until slow === midpoint
    while (fast != tail && fast.next != tail) {
        fast = fast.next.next;
        slow = slow.next;
    }
    const root = new TreeNode(slow.val); //mid point

    root.left = toBST(head, slow); //first half
    root.right = toBST(slow.next, tail); // tail is always null
    return root;
}

/**
 * BRUTE FORCE SOLUTION
 * @param {} head
 * @returns
 */
var sortedListToBSTBruteForce = function(head) {
    const arr = convertToArrayBruteForce(head);
    return convertToBSTBruteForce(arr);
};

convertToArrayBruteForce = (head) => {
    const nums = [];
    let curr = head;
    while (curr) {
        nums.push(curr.val);
        curr = curr.next;
    }
    return nums;
}

const convertToBSTBruteForce = (nums) => {
    if (!nums.length || !nums) return null;
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = convertToBSTBruteForce(nums.slice(0, mid));
    root.right = convertToBSTBruteForce(nums.slice(mid + 1));
    return root;
}