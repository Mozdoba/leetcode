/**
 * 501. Find Mode in Binary Search Tree
Easy

COMPLETED —— 2021-07-07 —— 30m 58s
Tag - Binary Search Tree

Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:


Input: root = [1,null,2,2]
Output: [2]
Example 2:

Input: root = [0]
Output: [0]


Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105


Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
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
 var findMode = function(root) {
    const map = new Map();
    const dfs = (root) => {
        if (!root) return;
        const stack = [root];

        while (stack.length) {
            let curr = stack.pop();
            if (map.has(curr.val)) map.set(curr.val, map.get(curr.val) + 1);
            else map.set(curr.val, 1);

            curr.left && stack.push(curr.left);
            curr.right && stack.push(curr.right);
        }
    }

    dfs(root);
    const numFreqencies = Array.from(map).sort(([k1, v1], [k2, v2]) => v2 - v1);
    let [num, freq] = numFreqencies[0];
    let answer = [num];
    for (let i = 1; i < numFreqencies.length; i++) {
        let [num, freq] = numFreqencies[i];
        let [prevNum, prevFreq] = numFreqencies[i-1];
        if (freq < prevFreq) break;
        answer.push(num)
    }
    return answer;
};

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
    b.right = f;
    d.left = g;
    d.right = h;

    const result = findMode(root);
    console.log(result);
}

const testB = () => {
    let root = new TreeNode(1);
    let b = new TreeNode(2);
    root.right = b;
    const result = findMode(root);
    console.log(result);
}

testB();

