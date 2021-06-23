/**
 * 100. Same Tree
Easy

FAILED —— 2021-06-22 —— 1hr
Tag - BFS / Tree

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
var isSymmetric = function(root) {
    return bfsBothSides(root);
};

const bfsBothSides = (root) => {
    if (!root) return false;
    const queue = [];
    queue.push(root);
    queue.push(root);

    while (queue.length != 0) {
        let tNode1 = queue.shift();
        let tNode2 = queue.shift();
        if (!tNode1 && !tNode2) continue;
        if (!tNode1 || !tNode2) return false;
        if (tNode1.val != tNode2.val) return false;
        queue.push(tNode1.left);
        queue.push(tNode2.right);
        queue.push(tNode1.right);
        queue.push(tNode2.left);
    }
    return true;
}

const testA = () => {
  let root = new TreeNode(1);
  let a = new TreeNode(2);
  let b = new TreeNode(2);
  let c = new TreeNode(3);
  let d = new TreeNode(4);
  let e = new TreeNode(3);
  let f = new TreeNode(4);
  root.left = a;
  root.right = b;
  a.left = c;
  a.right = d;
  b.left = e;
  b.right = f;
  isSymmetric(root);
}

testA();