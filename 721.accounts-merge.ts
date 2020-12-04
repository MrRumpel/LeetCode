/*
 * @lc app=leetcode id=721 lang=typescript
 *
 * [721] Accounts Merge
 */

// @lc code=start

function flat(arr: any[]) {
  const res: any[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      res.push(...flat(item))
    } else {
      res.push(item);
    }
  }
  return res;
}
function accountsMerge(accounts: string[][]): string[][] {
  const list = Array.from(new Set(flat(accounts)));
  const names = list.filter((item) => !item.includes('@'));
  const mails = list.filter((item) => item.includes('@'));
  return [...names.map((name) => ([name,
    ...mails.filter((mail) =>
      mail.split('@')[0].toLowerCase().includes(name.toLowerCase()))]))];
};
// @lc code=end

