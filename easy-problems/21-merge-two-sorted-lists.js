/**
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
Easy
Tag - LinkedList

Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  const head = new ListNode();
  let current = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      current = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      current = l2;
      l2 = l2.next;
    }
  }

  if (!l1) {
    current.next = l2;
  } else {
    current.next = l1;
  }
  return head.next;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoListsB = function(l1, l2) {
    const arrA = [];
    const arrB = [];
    while (l1 != null) {
      arrA.push(l1.val);
      l1 = l1.next;
    }

    while (l2 != null) {
      arrB.push(l2.val);
      l2 = l2.next;
    }

    const arrC = arrA.concat(arrB);
    arrC.sort();
    arrC.reverse();

    if (arrC.length === 0) return null;
    if (arrC.length === 1) {
      return new ListNode(arrC.pop());
    }

    const l3 = new ListNode(arrC.pop());
    let curr = new ListNode(arrC.pop());
    l3.next = curr;

    while (arrC.length != 0) {
      let next = new ListNode(arrC.pop());
      curr.next = next;
      curr = next;
    }
    return l3;
};

const testA = () => {
  let l1a = new ListNode(1);
  let l1b = new ListNode(2);
  let l1c = new ListNode(4);
  l1a.next = l1b;
  l1b.next = l1c;
  let l2a = new ListNode(1);
  let l2b = new ListNode(3);
  let l2c = new ListNode(4);
  l2a.next = l2b;
  l2b.next = l2c;
  const merged = mergeTwoLists(l1a, l2a);
  console.log("MERGED", merged);
}

const testB = () => {
  let l2 = new ListNode(0);
  const merged = mergeTwoLists(null, l2);
  console.log("MERGED", merged);
}

const testC = () => {
  let l1a = new ListNode(-10);
  let l1b = new ListNode(-6);
  let l1c = new ListNode(-6);
  let l1d = new ListNode(-6);
  let l1e = new ListNode(-3);
  let l1f = new ListNode(5);
  l1a.next = l1b;
  l1b.next = l1c;
  l1c.next = l1d;
  l1d.next = l1e;
  l1e.next = l1f;
  const merged = mergeTwoLists(l1a, null);
  console.log("MERGED", merged);
}

testA();
testB();
testC();