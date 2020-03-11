/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-26 10:59:04
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-26 11:05:33
 */
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //滑动窗口
  let left = 0
  let max = 0
  let set = new Set()
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      while(set.has(s[i])){
        //删除第一个
        set.delete(s[left++])
      }  
    }
    set.add(s[i])
    max = Math.max(max, i - left + 1)
  }
  return max
};
// @lc code=end