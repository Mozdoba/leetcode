/**
530. Minimum Absolute Difference in BST
Easy

COMPLETED —— 2021-07-07 —— 48m 27s
Tag - Binary Search Tree

 * Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

Example 1:


Input: root = [4,2,6,1,3]
Output: 1
Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1


Constraints:

The number of nodes in the tree is in the range [2, 104].
0 <= Node.val <= 105


Note: This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/

Accepted
120,095
Submissions
216,939
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
 var getMinimumDifference = function(root) {
    let minimumDifference = Infinity;
    const q = [root];
    while (q.length) {
        let curr = q.shift();
        minimumDifference = findMinDiff(curr, minimumDifference);
        curr.left && q.push(curr.left);
        curr.right && q.push(curr.right);
    }
    return minimumDifference;
};

const findMinDiff = (root, bestMinDiff) => {
    let stack = [];
    let minDiff = Infinity;
    // traverse  left side
    if (root.left) {
        stack.push(root.left);
        while (stack.length) {
            let curr = stack.pop();
            minDiff = Math.min(Math.abs(root.val-curr.val), minDiff);
            curr.right && stack.push(curr.right);
        }
        bestMinDiff = Math.min(bestMinDiff, minDiff);
    }

    stack = [];
    // traverse right side
    if (root.right) {
        stack.push(root.right);
        while (stack.length) {
            let curr = stack.pop();
            minDiff = Math.min(Math.abs(root.val-curr.val), minDiff);
            curr.left && stack.push(curr.left);
        }
        bestMinDiff = Math.min(bestMinDiff, minDiff);
    }
    return bestMinDiff;
}

const testA = () => {
    let root = new TreeNode(236);
    let a = new TreeNode(104);
    let b = new TreeNode(701);
    let c = new TreeNode(227);
    let d = new TreeNode(911);

    root.left = a;
    root.right = b;
    a.right = c;
    b.right = d;

    const result = getMinimumDifference(root);
    console.log(result);
}

testA();
