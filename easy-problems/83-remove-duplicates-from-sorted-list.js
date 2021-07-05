/**
 * 83. Remove Duplicates from Sorted List
Easy
COMPLETED —— 2021-06-19 —— 25m 3s
Tag - Linked List
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]


Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.

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
 var deleteDuplicates = function(head) {
  if (!head) return head;
  const map = new Map();
  map.set(head.val);
  let current = head.next;
  let prev = head;

  while (current) {
      if (map.has(current.val)) {
          prev.next = current.next;
          current = current.next;
      } else {
          map.set(current.val);
          prev = current;
          current = current.next;
      }
  }
  return head;
};

const testA = () => {
  let head = new ListNode(1);
  let a = new ListNode(1);
  let b = new ListNode(2);
  let c = new ListNode(3);
  head.next = a;
  a.next = b;
  b.next = c;
  deleteDuplicates(head);
}

testA();