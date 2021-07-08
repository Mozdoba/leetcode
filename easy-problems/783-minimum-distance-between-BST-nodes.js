/**
 * 783. Minimum Distance Between BST Nodes
Easy

COMPLETED —— 2021-07-07 —— 15m 59s
Tag - Binary Search Tree

Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

Example 1:


Input: root = [4,2,6,1,3]
Output: 1
Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1


Constraints:

The number of nodes in the tree is in the range [2, 100].
0 <= Node.val <= 105


Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

Accepted
95,483
Submissions
174,721
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
var minDiffInBST = function(root) {
    const q = [root];
    let minDiff = Infinity;
    while (q.length) {
        let curr = q.shift();
        minDiff = minDiffForNode(curr, root, minDiff);
        curr.left && q.push(curr.left);
        curr.right && q.push(curr.right);
    }
    return minDiff;
};

const minDiffForNode = (node, root, bestMinDiff) => {
    const stack = [root];
    while (stack.length) {
        let curr = stack.pop();
        let diff = Math.abs(node.val - curr.val);
        bestMinDiff = curr === node ? bestMinDiff : Math.min(bestMinDiff, diff);
        curr.left && stack.push(curr.left);
        curr.right && stack.push(curr.right);
    }
    return bestMinDiff;
}




