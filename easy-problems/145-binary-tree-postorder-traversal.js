/**
 * 145. Binary Tree Postorder Traversal
Easy

COMPLETED —— 2021-06-23 —— 2m 05s
Tag - Depth First Search / Tree

Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [3,2,1]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [2,1]
Example 5:

Input: root = [1,null,2]
Output: [2,1]

Constraints:

The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    return postOrderTraversalIterative(root);
};

var postOrderTraversalIterative = function(root) {
    let values = [];
    let stack = [];
    if (!root) return values;
    stack.push(root);

    while (stack.length != 0) {
        let curr = stack.pop();

        curr.left && stack.push(curr.left);
        curr.right && stack.push(curr.right);
        values.push(curr.val);
    }
    return values.reverse();
};

const testA = () => {
    let rootP = new TreeNode(1);
    let a = new TreeNode(2);
    let b = new TreeNode(3);
    rootP.left = a;
    rootP.right = b;

    let rootQ = new TreeNode(1);
    a = new TreeNode(2);
    b = new TreeNode(3);
    rootQ.left = a;
    rootQ.right = b;
    console.log(preorderTraversal(rootP));
  }

  testA();