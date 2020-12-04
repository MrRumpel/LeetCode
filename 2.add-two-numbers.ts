/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }


function listNodeTotal(list: ListNode): string {
  let str = list.val.toString();
  if (!list.next) {
    return str += listNodeTotal(list.next);
  } else {
    return str += list.val;
  }
}

function numberToListNode(num: string): ListNode {
  const list = num.split('');
  return { val: Number(num), next: null };
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return numberToListNode(listNodeTotal(l1) + listNodeTotal(l2));
};

// @lc code=end

