/**
 * 113. Path Sum II
Medium

COMPLETED —— 2021-06-23 —— 22m 27s
Tag - Depth First Search / Tree

Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

A leaf is a node with no children.

Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: []
Example 3:

Input: root = [1,2], targetSum = 0
Output: []


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
 var pathSum = function(root, targetSum) {
    const bag = {
        paths: [],
        path: [],
        sum: 0,
        targetSum,
    }
    preOrderTraversalPathSum(root, bag);
    return bag.paths;
};

const preOrderTraversalPathSum = (root, bag) => {
    if (root) {
        bag.sum += root.val;
        bag.path.push(root.val);

        let left = root.left;
        let right = root.right;

        if (!left && !right && bag.sum === bag.targetSum) {
            bag.paths.push(Array.from(bag.path));
        }
        preOrderTraversalPathSum(left, bag);
        preOrderTraversalPathSum(right, bag);
        bag.path.pop();
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