/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 11:14:08
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 11:38:10
 */
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let idx = 0
  let len = digits.length - 1
  for(let i = len; i >= 0; i--){
    if(digits[i] == 9){
      digits[i] = 0
      idx = 1
    }else{
      digits[i] += 1 
      return digits
    }
  }
  if(idx == 1){
    digits.unshift(1)
  }
  return digits
};
// @lc code=end

