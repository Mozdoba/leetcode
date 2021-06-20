/**
206. Reverse Linked List
Easy
FAILED —— 2021-06-19 —— 15m 49s
Tag - Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:

Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000


Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let current = head;
  let prev = null;
  while (current) {
      let temp = current.next;

      current.next = prev;
      prev = current;
      current = temp;
  }

  return prev
};

const testA = () => {
  let a = new ListNode(1);
  let b = new ListNode(2);
  let c = new ListNode(3);
  let d = new ListNode(4);
  let e = new ListNode(5);
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  reverseList(a);
}

testA();

