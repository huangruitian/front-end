/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-28 17:30:09
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-28 18:52:32
 */
/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = []
  if(!digits) return res;
  let Obj = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }
  digits = digits.split('')
  let backtrack = (res, k, temp, digits, Obj) => {
    if (temp.length === digits.length) {
      res.push(temp)
    } else {
      //控制行，拿到每一行。其实就相当于23全排列
      let str = Obj[digits[k]] //每个排列的数的字母都要拿一遍
      for (let i = 0; i < str.length; i++) {
          backtrack(res, k + 1, temp + str[i], digits, Obj)
      }
    }
  }
  backtrack(res, 0, '', digits, Obj)
  return res
};
// @lc code=end