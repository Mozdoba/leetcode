/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.

COMPLETED —— 2021-06-23 —— 10m
Tag - Depth First Search / Tree

Example 1:

Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:

Input: root = [1,2]
Output: [1,2]
Example 5:

Input: root = [1,null,2]
Output: [1,2]

Constraints:

The number of nodes in the tree is in the range [0, 100].
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
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let stack = [];
    if (!root) return stack;
    preOrderTraversal(root, stack);
    return stack;
};

const preOrderTraversalIterative = (root) => {
    let stack = [];
    let values = [];
    if (!root) return values;
    stack.push(root);

    while (stack.length != 0) {
        let curr = stack.pop()
        values.push(curr.val);
        curr.right && stack.push(curr.right); // push in the opposite order that we would have in recursive
        curr.left && stack.push(curr.left);
    }
}

const preOrderTraversal = (root, stack) => {
    if (root) {
        stack.push(root.val);
        preOrderTraversal(root.left, stack);
        preOrderTraversal(root.right, stack);
    }
}
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