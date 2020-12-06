/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  const num = s.replace(/[a-zA-Z]/g, '').replace(/ /g, '');
  console.info(s);
  console.info(num);
  console.info(Number(num));
  if (Number(num) < 2 ** 31 * -1) {
    return -2147483648;
  }
  if (Number(num) > 2 ** 31 - 1) {
    return 2147483647;
  }
  if (Number.isNaN(Number(num))) {
    return 0;
  }
  return s.match(/^[a-zA-Z]/) ? 0 : Number(num);
};
// @lc code=end

