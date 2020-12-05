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
    console.info(list.val);
    str += list.val.toString();
    return listNodeTotal(list.next, str);
  } else {
    return str;
  }
}

function numberToListNode(list: number[], listNode?: ListNode | null): ListNode | null {
  const index = list.length;
  if (index > 0) {
    return index === 1 ? { val: Number(list[index]), next: null } :
      { val: Number(list.pop()), next: numberToListNode(list) }
  } else {
    return null;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const nums = Number(listNodeTotal(l1, '')) +
    Number(listNodeTotal(l2, ''));
  const list = nums.toString().split('').map((item) => Number(item));
  console.log(l1);
  console.log(l2);
  console.log(nums);
  console.log(list);
  return numberToListNode(list);
};

// @lc code=end

