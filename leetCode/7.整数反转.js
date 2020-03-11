/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 14:37:05
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 14:41:30
 */
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = ''
  let arr = ('' + x).split('')
  let tag = false
  if(arr[0] == '-'){
    tag = true
    arr.shift()
  }
  arr.reverse()
  arr.forEach(d => res += d)
  res = tag ? 0 - Number(res) : Number(res)
  return res >= Math.pow(2, 31) - 1 || res <= -Math.pow(2, 31) ? 0 : res

};
// @lc code=end

