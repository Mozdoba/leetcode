/**
 * 700. Search in a Binary Search Tree
Easy

COMPLETED —— 2021-07-07 —— 2m 45s
Tag - Binary Search Tree

You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []


Constraints:

The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 107
root is a binary search tree.
1 <= val <= 107
Accepted
298,901
Submissions
405,575
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    if (!root) return null;
    const stack = [root];
    while (stack.length) {
        let curr = stack.pop();
        if (curr.val === val) return curr;
        curr.left && val < curr.val && stack.push(curr.left);
        curr.right && val > curr.val && stack.push(curr.right);
    }
    return null
};

 var searchBST_Niave = function(root, val) {
    if (!root) return null;
    const stack = [root];
    while (stack.length) {
        let curr = stack.pop();
        if (curr.val === val) return curr;
        curr.left && stack.push(curr.left);
        curr.right && stack.push(curr.right);
    }
    return null
};


const testA = () => {
    let root = new TreeNode(4);
    let a = new TreeNode(2);
    let b = new TreeNode(7);
    let c = new TreeNode(1);
    let d = new TreeNode(3);

    root.left = a;
    root.right = b;
    a.left = c;
    a.right = d;

    const result = searchBST(root);
    console.log(result);
}