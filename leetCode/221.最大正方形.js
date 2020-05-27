/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 暴力求解：当matrix[i][j] == '1'时，向上或者向左找边长小的；
  // 定义状态，dp[i][j] 表示i,j矩阵内最大的边长
  // 状态转移方程：
  // 当matrix[i][j] == '1', dp[i][j] = min(向上的边长，向左的边长) + 1
  // 当matrix[i][j] == '0'，dp[i][j] = 0
  // 初始值和边界：初始值直接是第一行第一列，边界直接是matrix矩阵；
  let row = matrix.length
  let max = 0
  if (row == 0 || matrix[0].length == 0) {
    return max
  }
  let col = matrix[0].length
  let dp = Array.from(new Array(row), () => new Array(col).fill(0))
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 || j == 0 || matrix[i][j] == '0') {
        dp[i][j] = matrix[i][j]
      } else {
        //不要遗漏对角线 dp[i - 1][j - 1]
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
      max = Math.max(max, dp[i][j])
    }
  }
  return max ** 2
};
// @lc code=end