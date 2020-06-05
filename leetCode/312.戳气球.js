/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  // 回溯法，状态树很大
  // 加上两个虚拟气球，变成求1 -（n+1）之间的最大银币数
  // dp[i][j] 表示截破[i, j)之间气球所获得的最大银币数
  // [i, j) 之间有很多气球k，枚举截取最大分数那个即可
  // tips: nums[i] * nums[k] * nums[j]，表示最后截破那个气球是k，再加上中间已经截破的dp[i][k] 和 dp[k][j]   
  // 状态转移方程：
  // dp[i][j] = Math.max(
  //   dp[i][j],
  //   nums[i] * nums[k] * nums[j] + dp[i][k] + dp[k][j]
  // )
  // base case i == j 时候没有气球被揭破，故i == j都是0
  let n = nums.length;
  let points = [1, ...nums, 1];
  let dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
  // 因为最终求的是dp[0][n+1]
  // 所有遍历方式得从下往上，从右往左
  for (let i = n; i >= 0; i--) {
    for (let j = i + 1; j < n + 2; j++) {
      // 枚举截[i, j) 中的k，取最大的   
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          points[i] * points[k] * points[j] + dp[i][k] + dp[k][j]
        );
      }
    }
  }
  return dp[0][n+1]
};
// @lc code=end
