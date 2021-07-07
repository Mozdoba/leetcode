/**
 * 653. Two Sum IV - Input is a BST
Easy

COMPLETED —— 2021-07-07 —— 15m 03s
Tag - Binary Search Tree

Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:


Input: root = [5,3,6,2,4,null,7], k = 9
Output: true
Example 2:


Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
Example 3:

Input: root = [2,1,3], k = 4
Output: true
Example 4:

Input: root = [2,1,3], k = 1
Output: false
Example 5:

Input: root = [2,1,3], k = 3
Output: true


Constraints:

The number of nodes in the tree is in the range [1, 104].
-104 <= Node.val <= 104
root is guaranteed to be a valid binary search tree.
-105 <= k <= 105

Accepted
203,584
Submissions
359,421
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    const q = [root];
    while (q.length) {
        const curr = q.shift();
        if (targetExists(root, curr, k)) return true;
        curr.left && q.push(curr.left);
        curr.right && q.push(curr.right);
    }
    return false;
};

const targetExists = (root, node, target) => {
    const stack = [root];
    while (stack.length) {
        let curr = stack.pop();
        let sum = node.val + curr.val
        if (sum === target && curr !== node) return true;
        if (target < sum && curr.left) stack.push(curr.left);
        if (target > sum && curr.right) stack.push(curr.right);
    }
    return false;
}

const testA = () => {
    let root = new TreeNode(5);
    let a = new TreeNode(3);
    let b = new TreeNode(6);
    let c = new TreeNode(2);
    let d = new TreeNode(4);
    let e = new TreeNode(7);
    root.left = a;
    root.right = b;
    a.left = c;
    a.right = d;
    b.right = e;

    const result = findTarget(root, 9);
    console.log(result);
}