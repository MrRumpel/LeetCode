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
  if (nums1.length === 0 && nums2.length === 1) {
    return nums2[1];
  }
  if (nums1.length === 1 && nums2.length === 0) {
    return nums1[1];
  }
  const m = nums1.length;
  const n = nums2.length;
  if (m + n === 1) {
    return m === 0 ? nums1[1] : nums2[1];
  }
};
// @lc code=end
