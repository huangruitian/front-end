/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-27 17:20:12
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-27 18:01:44
 */
/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  //1.先检测第一行第一列有没有零，有的话后面要全置零
  //2.检测除了第一行第一列的，如果对应的行列有0，就把当前的置为0
  //3.再检测第一行和第一列要不要全置空为0
  let row = matrix.length;
  let col = matrix[0].length;
  let row0_flag = false;
  let col0_flag = false;
  // 第一行是否有零
  row0_flag = matrix[0].some(d => d == 0)
  // 第一列是否有零
  col0_flag = matrix.some(d => d[0] == 0)
  // 把第一行第一列作为标志位
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  // 置0
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (row0_flag) {
    matrix[0] = matrix[0].map(d => d = 0)
  }
  if (col0_flag) {
    matrix = matrix.map(d => d[0] = 0)
  }
};
// @lc code=end