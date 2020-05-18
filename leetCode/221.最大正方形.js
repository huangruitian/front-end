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
  //dp[i][j] 表示 matrix[i][j] 所得到的最大边长
  //那 dp[i][j] 怎么推导呢？直觉上，如果 matrix[i][j] = 0，就是0
  //如果 matrix[i][j] = 1，就往上或者往左找第一个为 0 的，找最小边长
  // dp[i][j] = min(左边的边长，上边的边长) + 1
  // 事实上，我们dp就是一个递推的过程，计算 dp[i][j] 的最大边长时候，
  // dp[i-1][j-1]是已知的，所以我们可以这么表示
  // dp[i][j] = min(左边的边长，上边的边长, dp[i-1][j-1]) + 1
  // 综上所述，方程式为：
  // dp[i][j] = min(dp[i][j-1]，dp[i-1][j], dp[i-1][j-1]) + 1
  // base case 就是 matrix 的第一行第一列
  let row = matrix.length;
  if (!row || !matrix[0].length) {
    return 0;
  }
  let col = matrix[0].length;
  let max = 0;
  let dp = Array.from(new Array(row), () => new Array(col).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = matrix[i][j];
      } else {
        if (matrix[i][j] == "1") {
          dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;  
        }
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  //   console.log(dp[i - 1][j - 1] * dp[i - 1][j - 1]);
  return max * max;
};
// @lc code=end
