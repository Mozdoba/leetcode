/**
94. Binary Tree Inorder Traversal
Easy
COMPLETED —— 2021-06-19 —— 3m 44s
Tag - Hash Table
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]
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
 var inOrderTraversal = function(root) {
  const result = [];
  traverseInOrder(root, result);
  return result;
};

const traverseInOrder = (root, arr) => {
  if (root) {
      traverseInOrder(root.left, arr);
      arr.push(root.val);
      traverseInOrder(root.right, arr);
  }
}

const traversePreOrder = (root, arr) => {
  if (root) {
      arr.push(root.val);
      traversePreOrder(root.left, arr);
      traversePreOrder(root.right, arr);
  }
}

const traversePostOrder = (root, arr) => {
  if (root) {
      traversePostOrder(root.left, arr);
      traversePostOrder(root.right, arr);
      arr.push(root.val);
  }
}

const testA = () => {
  let root = new TreeNode(1);
  let a = new TreeNode(2);
  let b = new TreeNode(3);
  root.right = b;
  b.left = c;
  inOrderTraversal(root);
}

testA();