/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-29 13:14:30
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-29 13:25:11
 */
/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = Array(n).fill(1)
  if (!m || !n) return 0;
  if (m === 1 || n === 1) return 1;
  for (let j = 1; j < m; j++) {
    for (let i = 1; i < n; i++) {
      dp[i] += dp[i - 1] 
    }
  }
  return dp[n - 1]
};
// @lc code=end