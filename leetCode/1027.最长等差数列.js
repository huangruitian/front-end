/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-12 17:52:25
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-13 09:52:51
 */
/*
 * @lc app=leetcode.cn id=1027 lang=javascript
 *
 * [1027] 最长等差数列
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function (A) {
  let len = A.length;
  let max = 1;
  let dp = Array(len).fill(0).map(d => d = Array(len).fill(0));
  for (let i = 0; i < len; i++)
    for (let j = 0; j < i; j++) {
      let key = A[i] - A[j];
      //console.log(dp[j][key], key)
      if (dp[j][key] !== undefined && dp[j][key] !== 0) {
        dp[i][key] = dp[j][key] + 1;
      } else {
        dp[i][key] = 2;
      }
      max = Math.max(max, dp[i][key]);
    }
  return max;
  // [20,1,15,3,10,5,8]
};
// @lc code=end