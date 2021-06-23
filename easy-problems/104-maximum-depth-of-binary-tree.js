/**
 * 104. Maximum Depth of Binary Tree
Easy

FAILED —— 2021-06-23 —— 2hr
Tag - Depth First Search / Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1


Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
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
 var maxDepth = function(root) {
    return bfs(root);
};

const bfs = (root) => {
    let depth = 0;
    if (!root) return depth;
    const queue = new Array();
    queue.push(root);

    while (queue.length != 0) {
        depth++; // reached a new level
        let lengthAtLevel = queue.length;

        for (let i = 0; i < lengthAtLevel; i++) {
            let node = queue.shift();

            let left = node.left;
            let right = node.right;

            if (left) queue.push(left);
            if (right) queue.push(right);
        }
    }

    return depth;
}

const testA = () => {
    let root = new TreeNode(1);
    let a = new TreeNode(2);
    let b = new TreeNode(3);
    let c = new TreeNode(4);
    let d = new TreeNode(5);
    root.left = a;
    root.right = b;
    a.left = c;
    b.right = d;
    console.log(maxDepth(root));
}

const testB = () => {
  let root = new TreeNode(0);
  let a = new TreeNode(2);
  let b = new TreeNode(4);
  let c = new TreeNode(1);
  let d = new TreeNode(3);
  let e = new TreeNode(-1);
  let f = new TreeNode(5);
  let g = new TreeNode(1);
  let h = new TreeNode(6);
  let i = new TreeNode(8);
  root.left = a;
  root.right = b;
  a.left = c;
  b.left = d;
  b.right = e;
  c.left = f;
  c.right = g;
  d.right = h;
  e.right = i;
  console.log(maxDepth(root));
}

//   testA();
testB();