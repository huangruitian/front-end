/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 14:25:59
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 14:26:22
 */
/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  //注意里面的多个空格匹配成一个
  return s.replace(/\s+/g,' ').trim().split(' ').reverse().join(' ');
};
// @lc code=end

