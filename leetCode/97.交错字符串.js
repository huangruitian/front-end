/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  // 定义状态：
  // dp[i][j] = boolean 表示，s1的前[0, i)个字符，s1的前[0, j)个字符，能够凑成s3的[0, i+j)
  // 往问题规模变小了想，假设s1/s2少一个字符，照样能拼接成s3，那么再加一个也是可以拼接成s3
  // 状态转移方程：
  // dp[i][j] = (dp[i-1][j] && s1[i-1] === s3[i+j-1]) || (dp[i][j-1] && s2[j-1] === s3[i+j-1])
  // 解释：(dp[i-1][j] && s1[i-1] === s3[i+j-1])，
  // dp[i-1][j] 意思是说s1少一个，但是s3的结尾是s1凑成的，s1再多一个也可也呀
  // dp[i][j-1] 同上；
  // base case：
  // 当s1为空的时候，dp[0][j] = (dp[0][j-1] && s2[j - 1] == s3[j - 1]) ? true : false
  // 当s2为空的时候，dp[i][0] = (dp[i-1][0] && s1[i - 1] == s3[i - 1]) ? true : false
  // dp[0][0] = true，
  // 边界，需要用到空串
  let n = s1.length;
  let m = s2.length;
  if (m + n != s3.length) {
    return false;
  }
  let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(false));
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if(i == 0 && j == 0){
        dp[i][j] = true
      }else if (i == 0) {
        // s1 为空的情况
        dp[i][j] = (dp[i][j - 1] && s2[j - 1] == s3[j - 1]) ? true : false;
      } else if (j == 0) {
        // s2 为空的情况
        dp[i][j] = (dp[i - 1][j] && s1[i - 1] == s3[i - 1]) ? true : false;
      } else {
        dp[i][j] =
          (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
          (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
      }
    }
  }
  return dp[n][m];
};
// @lc code=end
