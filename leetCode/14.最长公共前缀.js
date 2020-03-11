/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 16:03:08
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 16:13:53
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let len = strs.length
  if(!len) return ''
  let res = strs[0]
  for (let i = 1; i < len; i++) {
    let j = 0
    for (; j < res.length; j++) {
      if (res[j] != strs[i][j]) {
        break
      }
    }
    res = res.substr(0, j)
    //没有相同的
    if (res === '') {
      return res
    }
  }
  return res;
};
// @lc code=end