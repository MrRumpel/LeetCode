/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  if (s.match(/^[a-zA-Z]/)) {
    return 0;
  }
  const num = s.replace(/[a-zA-Z]/g, '@@@').replace(/ /g, '').replace('-00', '-');
  console.info(s);
  console.info(num.match(/^(\-?|\+?)\d+(\.\d+)?$/));
  console.info(num);
  console.info(Number(num));
  if (num.indexOf('@@@') > 0) {
    const temp = num.split('@@@')[0];
    console.info(temp);
    console.info(temp.match(/^(\-?)\d+(\.\d+)?$/));
    return temp.match(/^(\-?)\d+(\.\d+)?$/) ? Number(temp) : 0;
  }
  if (Number(num) < 2 ** 31 * -1) {
    return -2147483648;
  }
  if (Number(num) > 2 ** 31 - 1) {
    return 2147483647;
  }
  if (Number.isNaN(Number(num))) {
    return 0;
  }
  return Number(num);
};
// @lc code=end

