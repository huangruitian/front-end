/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 15:15:25
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 15:15:31
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let left = 0;
  let right = s.length - 1;
  while(left < right) {
      if(s[left] != s[right]) {
         return false 
      }
      left++
      right--
  }
  return true
};
// @lc code=end

