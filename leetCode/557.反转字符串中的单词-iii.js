/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 14:30:13
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 14:30:29
 */
/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.replace(/\s+/g, ' ').trim().split(' ').map(d => {
    return d = d.split('').reverse().join('')
  }).join(' ');
};
// @lc code=end