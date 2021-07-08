/**
 * 234. Palindrome Linked List
Easy

Tag - Linked List
1st try - FAILED —— 2021-06-19 —— 25m 24s
2nd try - COMPLETED –– 2021-07-07 –– 6m 15s

Given the head of a singly linked list, return true if it is a palindrome.

Example 1:

Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false


Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9


Follow up: Could you do it in O(n) time and O(1) space?

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
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 *
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let length = 0;
    let curr = head;
    let prev = null;
    // make linked list doubly linked
    while (curr) {
      curr.prev = prev;
      prev = curr;
      curr = curr.next;
      length++;
    }
    let mid = Math.floor(length / 2);
    let tail = prev;

    // compare vals from front & back
    while (mid) {
      if (head.val !== tail.val) return false;
      head = head.next;
      tail = tail.prev;
      mid--;
    }
    return true;
 }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  let fast = head;
  let slow = head;
  let mem = [];
  while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  // slow is at midpoint
  // capture values from mid -> end
  while (slow) {
      mem.push(slow.val);
      slow = slow.next;
  }

  // compare values starting from head with reverse of mem until mem is empty
  let current = head;
  mem.reverse();
  while (mem.length != 0) {
      if (current.val !== mem.pop()) return false;
      current = current.next;
  }
  return true;
};

const testA = () => {
  let a = new ListNode(1);
  let b = new ListNode(2);
  let c = new ListNode(2);
  let d = new ListNode(1);
  a.next = b;
  b.next = c;
  c.next = d;

  isPalindrome(a);
}

testA();