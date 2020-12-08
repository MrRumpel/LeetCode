/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  // 数组小于3直接返回空数组
  if (nums.length < 3) {
    return [];
  }
  const list = nums.sort((a, b) => a - b);
  // 排序后 数组成员 全大于0 或者 全小于0 说明无解 直接返回空数组
  if (list[0] > 0 || list[list.length - 1] < 0) {
    return [];
  }
  const result: number[][] = [];
  for (let i = 0; i < list.length - 2 && list[i] <= 0; i++) {

  }
  return result;
};
// @lc code=end

