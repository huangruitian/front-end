/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 09:08:44
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 09:08:54
 */
/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = []
  while (matrix.length) {
    getSpiral(matrix, res)
  }
  return res.filter(d => d !== undefined);
};

function getSpiral(matrix, res) {
  res.push(...matrix.shift())
  if (!matrix.length) {
    return
  }
  matrix.forEach(d => {
    res.push(d.pop())
  })
  let last = matrix.pop()
  while (last.length) {
    res.push(last.pop())
  }
  if (!matrix.length) {
    return
  }
  //
  let temp = []
  matrix.forEach(d => {
    temp.push(d.shift())
  })
  res.push(...temp.reverse())
}
// @lc code=end

