/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 14:21:05
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 14:21:17
 */
/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex == 0) {
    return [1]
  }
  if (rowIndex == 1) {
    return [1, 1]
  }
  let res = [1, 2, 1]
  if (rowIndex == 2) {
    return res
  }
  let last = res
  for (let i = 3; i <= rowIndex; i++) {
    let temp = Array(i + 1).fill(1)
    for (let i = 1; i < temp.length - 1; i++) {
      temp[i] = last[i - 1] + last[i]
    }
    last = temp
  }
  return last
};
// @lc code=end