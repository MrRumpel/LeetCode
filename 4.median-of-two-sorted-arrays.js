/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  if (m + n === 1) {
    return n === 0 ? nums1[0] : nums2[0];
  }
  console.log(m, n);
  const nums = [...nums1, ...nums2].sort((a, b) => a - b);
  const l = nums.length;
  // 余数为零 偶数 非零 奇数
  const pos = Math.round(l / 2);
  console.log(l);
  if (l % 2 === 0) {
    const answer = nums[pos] + nums[pos - 1];
    return answer / 2;
  } else {
    return nums[pos - 1];
  }
};
// @lc code=end
