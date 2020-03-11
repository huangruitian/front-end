/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 14:42:29
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 14:56:08
 */
/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let res = -1
  if(!s) return res
  let hash = new Map()
  for (let i = 0, len = s.length; i < len; i++) {
    if (!hash.has(s[i])) {
      hash.set(s[i], 1)
    }else{
      hash.set(s[i], hash.get(s[i]) + 1)
    }
  }
  for (let i = 0, len = s.length; i < len; i++) {
    if (hash.get(s[i]) == 1) {
      return i
    }
  }
  return res
};
// @lc code=end