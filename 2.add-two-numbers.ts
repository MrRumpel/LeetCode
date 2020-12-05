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


function listNodeTotal(list: ListNode | null, str: string): string {
  if (list !== null) {
    if (!list.next) {
      return str += listNodeTotal(list.next, str);
    } else {
      return str += list.val;
    }
  } else {
    return '';
  }
}

function numberToListNode(list: string[], listNode?: ListNode | null): ListNode | null {
  const index = list.length;
  if (index > 0) {
    return index === 1 ? { val: Number(list[index]), next: null } :
      { val: Number(list[index]), next: numberToListNode(list.slice(0, index - 1)) }
  } else {
    return null;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const nums = Number(listNodeTotal(l1, l1.val.toString())) +
    Number(listNodeTotal(l2, l2.val.toString()));
  const list = nums.toString().split('');
  console.log(l1);
  console.log(l2);
  console.log(nums);
  console.log(list);
  return numberToListNode(list);
};

// @lc code=end

