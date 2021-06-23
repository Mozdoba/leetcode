/**
 * 100. Same Tree
Easy

COMPLETED —— 2021-06-22 —— 1hr
Tag - Depth First Search / Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false


Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
  let arrP = new Array();
  let arrQ = new Array();
  traversePreOrder(p, arrP);
  traversePreOrder(q, arrQ);

  if (arrP.length != arrQ.length) return false;
  for (let i = 0; i < arrP.length; i++) {
      if (arrP[i] !== arrQ[i]) return false;
  }
  return true;
};

let traversePreOrder = (root, arr) => {
  if (root) {
    arr.push(root.val)
    traversePreOrder(root.left, arr);
    traversePreOrder(root.right, arr);
  }
  if (!root) {
    arr.push(null);
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
  console.log(isSameTree(rootP, rootQ));
}

const testB = () => {
  let rootP = new TreeNode(1);
  let a = new TreeNode(2);
  rootP.left = a

  let rootQ = new TreeNode(1);
  a = new TreeNode(2);
  rootQ.right = a;
  console.log(isSameTree(rootP, rootQ));
}

// testA();
testB();