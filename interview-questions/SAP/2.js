/**
 *
 *
 * Given the parent child relationship like
 * [[2, 3], [2, 4], [1, 5], [4, 6], [5,7], [1, 2]]
 * where [parent, child], write a function to get the
 * ancestors of the input array.

      1

    /   \

   2      5

 /  \      \

3    4      7

      \

        6


Ancestor array will be in order of ancestor level,
with the immediate parent to be the last element.

For example:

Input : [1, 5, 6, 7], [[2, 3], [2, 4], [1, 5], [4, 6], [5,7], [1, 2]]

Output: [[], [1], [1,2,4], [1,5]]

For each element in the output, application needs to execute a
method expensiveProcess(element) on each unique element before
put it in the output array (meaning the expensiveProcess only
    needs to be executed once for an element)
 */

const solution = (nodesOfInterest, relationships) => {
    let root = createTree(relationships);

    let res = [];
    if (nodesOfInterest.length == 0) return res;
    let stack = [];

    for (let i = 0; i < nodesOfInterest.length; i++) {
        stack.push(root);
        while (stack.length != 0) {
            let curr = stack.pop();
            if (curr === nodesOfInterest[i]) {
                res.push(Array.from(stack));
            }
            curr.left && stack.push(curr.left);
            curr.right && stack.push(curr.right);
            // need to determine how to revert back to previous node
            // without messing up stack (ancestors)
        }
    }
    return res;
}

const treeNode = (value) => {
    let val = value;
    let left = leftNode;
    let right = rightNode;
}

const createTree = () => {
    let a = treeNode(1);
    let b = treeNode(1);
    let c = treeNode(1);
    let d = treeNode(1);
    let e = treeNode(1);

    a.left = b;
    a.right = c;
    return a;
}





