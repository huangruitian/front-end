/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  // 从上至下、从左至右迭代整个矩阵：
  // dp[i][j] = min(dp[i][j], min(dp[i][j - 1], dp[i - 1][j]) + 1)
  // 从下到上、 从右至左迭代整个矩阵：
  // dp[i][j] = min(dp[i][j], min(dp[i][j + 1], dp[i + 1][j]) + 1)
  let l1 = matrix.length;
  let l2 = matrix[0].length;
  if (l1 == 0) return matrix;
  let r = Array(l1).fill(0).map(d => d = Array(l2).fill(Number.MAX_VALUE - 1000))

  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      if (matrix[i][j] == 0)
        r[i][j] = 0; //只更新一遍, 边界
      else {
        if (i > 0)
          r[i][j] = Math.min(r[i][j], r[i - 1][j] + 1);
        if (j > 0)
          r[i][j] = Math.min(r[i][j], r[i][j - 1] + 1);
      }
    }
  }
  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      if (i < l1 - 1)
        r[i][j] = Math.min(r[i][j], r[i + 1][j] + 1);
      if (j < l2 - 1)
        r[i][j] = Math.min(r[i][j], r[i][j + 1] + 1);
    }
  }
  return r;
};
// @lc code=end