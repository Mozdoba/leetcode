/**
 * 160. Intersection of Two Linked Lists
Easy
COMPLETED —— 2021-06-19 —— 14m 19s
Tag - Linked List

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


It is guaranteed that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Example 1:

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
Example 2:


Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
Example 3:

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

Constraints:

The number of nodes of listA is in the m.
The number of nodes of listB is in the n.
0 <= m, n <= 3 * 104
1 <= Node.val <= 105
0 <= skipA <= m
0 <= skipB <= n
intersectVal is 0 if listA and listB do not intersect.
intersectVal == listA[skipA + 1] == listB[skipB + 1] if listA and listB intersect.

Follow up: Could you write a solution that runs in O(n) time and use only O(1) memory?
 */

/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  const map = new Map();

  // traverse A
  map.set(headA, headA);
  let current = headA.next;
  while (current) {
      map.set(current, current);
      current = current.next;
  }

  // traverse B
  if (map.has(headB)) return headB;
  map.set(headB, headB);
  current = headB.next;
  while (current) {
      if (map.has(current)) return current;
      map.set(current, current);
      current = current.next;
  }

  return null;
};

const testA = () => {
  let a1 = new ListNode("1a");
  let a2 = new ListNode("1b");
  let c1 = new ListNode("3a");
  let c2 = new ListNode("3b");
  let c3 = new ListNode("3c");
  a1.next = a2;
  a2.next = c1;
  c1.next = c2;
  c2.next = c3;

  let b1 = new ListNode("2a");
  let b2 = new ListNode("2b");
  let b3 = new ListNode("2c");
  b1.next = b2;
  b2.next = b3;
  b3.next = c1;
  console.log(getIntersectionNode(a1, b1));
}

testA();