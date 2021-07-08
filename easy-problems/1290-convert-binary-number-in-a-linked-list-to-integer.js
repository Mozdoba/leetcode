/**
 * 876. Middle of the Linked List
Easy

COMPLETED —— 2021-06-19 —— 4m
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.

Note:

The number of nodes in the given list will be between 1 and 100.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 *
 * 2nd Try Implementation
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
  let num = [];
  let curr = head;
  while (curr) {
      num.push(curr.val);
      curr = curr.next;
  }
  return parseInt(num.join(""), 2);
};

/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
  if (!head) return 0;

  let num = 0;
  let current = head;
  while (current.next) {
      num++;
      current = current.next;
  }

  current = head;
  let decimalSum = 0;
  while (num >= 0) {
      decimalSum += current.val === 1 ? Math.pow(2, num) : 0;
      current = current.next;
      num--
  }

  return decimalSum;
};

const testA = () => {
  let a = new ListNode(1);
  let b = new ListNode(0);
  let c = new ListNode(1);
  a.next = b;
  b.next = c;

  getDecimalValue(a);
}

testA();