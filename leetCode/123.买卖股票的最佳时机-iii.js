/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
  // dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
  // k 为 2，k 和 k-1 是有区别的，所以我们要枚举 k 这个状态
  // base case
  // dp[i - 1][k][0] 未开始，未持有股票，未0； dp[i - 1][k][1]，未开始，已持有股票 -Infinity
  // dp[i][k][0] = Math.max(0, -Infinity + prices[i]) = 0
  // dp[i][k][1] = Math.max(-Infinity, 0 - prices[i]) = -prices[i]
  let n = prices.length;
  if (n == 0) {
    return 0;
  }
  let maxTime = 2;
  let dp = Array.from(new Array(n), () => new Array(maxTime + 1));
  for (let i = 0; i < n; i++) {
    for (let r = 0; r <= maxTime; r++) {
      dp[i][r] = new Array(2).fill(0);
    }
  }
  for (let i = 0; i < n; i++) {
    // 注意，这里正着来反着来都能得到结果，想下为什么？
    // for (let k = 1; k <= maxTime; k++) {
    for (let k = maxTime; k >= 1; k--) {
      if (i == 0) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
    }
  }
  return dp[n - 1][maxTime][0]; 
};
// @lc code=end
