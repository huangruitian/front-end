/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 15:19:11
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 15:21:35
 */
/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  // 直接parseInt 转
  let number = parseInt(str)
  let max = Math.pow(2, 31) - 1
  let min = -Math.pow(2, 31)
  if (isNaN(number)) return 0;
  if (number >= max)
    number = max
  if (number <= min)
    number = min
  return number
};
// @lc code=end