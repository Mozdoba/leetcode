/**
 * 112. Path Sum
Easy

COMPLETED —— 2021-06-23 —— 51m 57s
Tag - Depth First Search / Tree

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.



Example 1:

COMPLETED —— 2021-06-23 —— 6min 21s
Tag - Depth First Search / Tree

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: false
Example 3:

Input: root = [1,2], targetSum = 0
Output: false


Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
 */

/**
 * Definition for a binary tree node.
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    let sumBag = {
        sum: 0,
        targetSum: targetSum,
    };
    return preOrderTraversalPathSum(root, sumBag) || false;
};

const preOrderTraversalPathSum = (root, bag) => {
    if (root) {
        bag.sum += root.val;
        let left = root.left;
        let right = root.right;

        if (!left && !right && bag.sum === bag.targetSum) return true;
        if (preOrderTraversalPathSum(left, bag) == true) return true;
        if (preOrderTraversalPathSum(right, bag) == true) return true;
        bag.sum -= root.val;
    }
}

const testA = () => {
    let root = new TreeNode(1);
    let a = new TreeNode(2);
    let b = new TreeNode(3);
    let c = new TreeNode(4);
    let d = new TreeNode(2);
    root.left = a;
    root.right = b;
    a.left = c;
    a.right = d;
    console.log(hasPathSum(root, 5));
}

testA();