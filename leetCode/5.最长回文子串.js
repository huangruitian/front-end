/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-27 18:14:08
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-28 10:36:22
 */
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 1.最长回文子串，把s反转，转化成求两个字符串的最长公共子串
  // 2.动态规划
  //   1）当字符串只有一个的时候都是回文，所有初始化dp[i][i] = true
  //   2）状态转移方程：如果第1位和第N位相等，并且第2位和第N-1位是回文串，那么第一位和第N位也是回文
  //      dp[r][l] = (s[r] == s[l] && dp[r - 1][l + 1])
  //   这里有个特殊的条件需要考虑，当s[r] == s[l]，r - l == 1,也就是说aba这样的情况时候，ab也是回文
  //   所有转移方程是：
  //      dp[r][l] = (s[r] == s[l] && r - l == 1 || dp[r - 1][l + 1])
  let len = s.length
  if (len < 2) return s;
  let res = ''
  let dp = Array(len).fill(0).map(d => d = Array(len).fill(false))
  for (let r = 0; r < len; r++) {
    for (let l = 0; l <= r; l++) {
       //这里非常要注意是下三角形的状态 dp[l + 1][r - 1]
       if(s[r] === s[l] && (r - l < 2 || dp[l + 1][r - 1])){
         //下三角
         dp[l][r] = true
       }
       if(dp[l][r] && r - l + 1 > res.length){
         res = s.substring(l, r + 1)
       }
    }
  }
  console.log(dp)
  return res;
};
// @lc code=end