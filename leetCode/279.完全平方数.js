/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // i表示当前数字，j*j表示平方数, dp[i],代表全是1，只装1的
  // dp[i - j * j] + 1, 代表选当前物品 j*j,后前面的还需要多少个？
  // 往完全背包想。背包容量是n，物品数是1-n的平方数。
  // dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  const dp = Array(n + 1).fill(0); // 数组长度为n+1，值均为0
  for (let i = 1; i <= n; i++) {
    dp[i] = i; // 最坏的情况就是每次+1
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
    }
  }
  return dp[n];
};
// @lc code=end

for (let i = 1; i <= n - 1; i++) {
  res = Math.max(res, Math.max(i * (n - i), i * 递归(n - i)));
}
return res;
