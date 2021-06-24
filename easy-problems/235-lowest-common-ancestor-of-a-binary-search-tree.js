/**
 * 235. Lowest Common Ancestor of a Binary Search Tree
Easy

COMPLETED —— 2021-06-23 —— 3m 39s
Tag - Depth First Search / Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2


Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.
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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  let pathP = dfs(root, p);
  let pathQ = dfs(root, q);
  let shorterPath = pathP.length < pathQ.length ? pathP : pathQ;
  let lca = pathP[0];
  for (let i = 0; i < shorterPath.length; i++) {
      if (pathP[i] !== pathQ[i]) return pathP[i-1];
      else lca = pathP[i]
  }
  return lca;
};

const dfs = (root, node) => {
  let path = [];
  if (!root) return path;
  let stack = [];
  stack.push(root);

  while (stack.length != 0) {
      let curr = stack.pop();
      path.push(curr);
      if (curr === node) return path;
      let left = curr.left;
      let right = curr.right;

      if (left && node.val < curr.val) stack.push(left);
      if (right && node.val >= curr.val) stack.push(right);
  }

  return path;
}

const testA = () => {
    let root = new TreeNode(6);
    let a = new TreeNode(2);
    let b = new TreeNode(8);
    let c = new TreeNode(0);
    let d = new TreeNode(4);
    let e = new TreeNode(7);
    let f = new TreeNode(9);
    let g = new TreeNode(3);
    let h = new TreeNode(5);
    root.left = a;
    root.right = b;
    a.left = c;
    a.right = d;
    b.left = e;
    b.right = f
    d.left = g;
    d.right = h;

    console.log(lowestCommonAncestor(root, a, b));
  }

  const testB = () => {
    let root = new TreeNode(6);
    let a = new TreeNode(2);
    let b = new TreeNode(8);
    let c = new TreeNode(0);
    let d = new TreeNode(4);
    let e = new TreeNode(7);
    let f = new TreeNode(9);
    let g = new TreeNode(3);
    let h = new TreeNode(5);
    root.left = a;
    root.right = b;
    a.left = c;
    a.right = d;
    b.left = e;
    b.right = f
    d.left = g;
    d.right = h;

    console.log(lowestCommonAncestor(root, a, d));
  }

//   testA();
  testB();