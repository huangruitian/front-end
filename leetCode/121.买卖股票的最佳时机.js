/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  // 因为 K = 1，对整个三维状态转移方程毫无影响，可以优化掉
  // dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
  // dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
  //             = Math.max(dp[i-1][k][1], -prices[i])
  
  let n = prices.length;
  if (n == 0) return 0;
  let dp = Array.from(new Array(n), () => new Array(2));
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }
  return dp[n - 1][0];
};
// @lc code=end
