/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
Easy
COMPLETED —— 2021-06-19 —— 24m 31s
Tag - Linked List
Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []

Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
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
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  if (!head) return head;

  const dummy = new ListNode(null, head);
  let prev = dummy;
  while (head && head.val === val) {
      head = head.next;
  }

  let current = head;
  while (current) {
      if (current.val === val) {
          prev.next = current.next;
          current = current.next;
      } else {
          prev = current;
          current = current.next;
      }
  }

  return head;
};

const testA = () => {
  let a = new ListNode(1);
  let b = new ListNode(2);
  let c = new ListNode(6);
  let d = new ListNode(3);
  let e = new ListNode(4);
  let f = new ListNode(5);
  let g = new ListNode(6);
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;

  console.log(removeElements(a, 6));
}

testA();