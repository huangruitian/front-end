/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  // 边界 dp[0] = dp[1] = 1;
  // s[i-1] != 0 && dp[i] = dp[i-1] + dp[i]
  // s[i-2] == 1 && dp[i] = dp[i] + dp[i-2]
  // s[i-2] == 2 && s[i-1] < 7 && dp[i] = dp[i] + dp[i-2]
  // 
  if (s[0] == 0) {
    return 0;
  }
  let n = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (s[i - 1] != 0) {
      dp[i] += dp[i - 1];
    }
    if (s[i - 2] == 1 || (s[i - 2] == 2 && s[i - 1] <= 6)) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[n];
};
// @lc code=end
