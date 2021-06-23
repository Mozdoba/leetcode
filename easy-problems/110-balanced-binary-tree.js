/**
 * 110. Balanced Binary Tree
Easy

COMPLETED —— 2021-06-23 —— 1hr
Tag - Depth First Search / Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.



Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true

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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if (!root) return true;
    let heightL = bfsHeight(root.left);
    let heightR = bfsHeight(root.right);
    if (Math.abs(heightL - heightR) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};

const bfsHeight = (root) => {
    let height = 0;
    if (!root) return height;
    let queue = [];
    queue.push(root);

    while (queue.length != 0) {
        height++;
        let nodesAtLevel = queue.length;

        for (let i = 0; i < nodesAtLevel; i++) {
            // push children for nodes only at 'nodesAtLevel' level
            let node = queue.shift();
            let left = node.left;
            let right = node.right;

            left && queue.push(left);
            right && queue.push(right);
        }
    }
    return height;
}

const testA = () => {
    let root = new TreeNode(0);
    let a = new TreeNode(2);
    let b = new TreeNode(4);
    let c = new TreeNode(1);
    let d = new TreeNode(5);
    let e = new TreeNode(1);
    root.left = a;
    root.right = b;
    a.left = c;
    c.left = d;
    c.right = e;

    console.log(isBalanced(root));
  }

const testB = () => {
    let root = new TreeNode(1);
    let a = new TreeNode(2);
    let b = new TreeNode(2);
    let c = new TreeNode(3);
    let d = new TreeNode(3);
    let e = new TreeNode(4);
    let f = new TreeNode(4);
    root.left = a;
    root.right = b;
    a.left = c;
    b.right = d;
    c.left = e;
    e.right = f;
    console.log(isBalanced(root));
}

//   testA();
testB();