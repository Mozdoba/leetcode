/**
 * 257. Binary Tree Paths
Easy

COMPLETED —— 2021-06-23 —— 7m 40s
Tag - Depth First Search / Tree

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.



Example 1:


Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Example 2:

Input: root = [1]
Output: ["1"]


Constraints:

The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100
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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    const options = {
        path: [],
        paths: [],
    };
    dfs(root, options);
    return options.paths.map((path) => {
        return path.join("->");
    });
};

const dfs = (root, options) => {
    if (root) {
        options.path.push(root.val);
        if (!root.left && !root.right) options.paths.push(Array.from(options.path));
        root.left && dfs(root.left, options);
        root.right && dfs(root.right, options);
        options.path.pop();
    }
}

const testA = () => {
    let root = new TreeNode(3);
    let a = new TreeNode(5);
    let b = new TreeNode(1);
    let c = new TreeNode(6);
    let d = new TreeNode(2);
    let e = new TreeNode(0);
    let f = new TreeNode(8);
    let g = new TreeNode(7);
    let h = new TreeNode(4);
    root.left = a;
    root.right = b;
    a.left = c;
    a.right = d;
    b.left = e;
    b.right = f
    d.left = g;
    d.right = h;

    console.log(binaryTreePaths(root, a, b));
  }

  const testB = () => {
   let root = new TreeNode(3);
   let a = new TreeNode(5);
   let b = new TreeNode(1);
   let c = new TreeNode(6);
   let d = new TreeNode(2);
   let e = new TreeNode(0);
   let f = new TreeNode(8);
   let g = new TreeNode(7);
   let h = new TreeNode(4);
    root.left = a;
    root.right = b;
    a.left = c;
    a.right = d;
    b.left = e;
    b.right = f
    d.left = g;
    d.right = h;

    console.log(binaryTreePaths(root, a, d));
  }

  testA();
  testB();