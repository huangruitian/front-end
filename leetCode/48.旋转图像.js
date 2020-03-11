/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 12:56:58
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 12:57:39
 */
/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  //先倒叙每行，再i, j交换
  matrix = matrix.reverse()
  for(let i = 0, len = matrix.length; i < len; i++){
    for(let j = i + 1; j < len; j++){
         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
};
// @lc code=end

