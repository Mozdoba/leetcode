/**
 * 141. Linked List Cycle
Easy
COMPLETED —— 2021-06-19 —— 15m
Tag - Linked List

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.


Follow up: Can you solve it using O(1) (i.e. constant) memory?
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
 * @return {boolean}
 */
 var hasCycle = function(head) {
  if (!head) return false;
  const map = new Map();
  map.set(head);

  let current = head.next;
  while (current) {
      if (map.has(current)) return true;
      map.set(current);
      current = current.next;
  }
  return false;
};

const testA = () => {
  let head = new ListNode(3);
  let a = new ListNode(2);
  let b = new ListNode(0);
  let c = new ListNode(-4);
  head.next = a;
  a.next = b;
  b.next = c;
  c.next = head;
  console.log(hasCycle(head));
}

testA();