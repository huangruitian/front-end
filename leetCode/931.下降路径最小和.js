/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-18 10:23:46
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-18 11:39:10
 */
/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {
  // dp倒推：
  // 最优子结构：dp[i][j], 第i行，j列的最小值，受上一行的三个影响
  // 所以转移方程为：
  // dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1]) + A[i][j]
  // 边界：边界就是第负一行的值，全0，这样好理解点
  let row = A.length
  let col = A[0].length
  let min = Math.min
  let dp = Array(row).fill().map(d => d = Array(col).fill(0))
  A[0].forEach((d, i) => dp[0][i] = d) //边界
  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if(j == 0){
        dp[i][j] = min(dp[i - 1][j], dp[i - 1][j + 1]) + A[i][j]
      }else if(j == col - 1){
        dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j]) + A[i][j]
      }else{
        dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) + A[i][j]
      }
    }
  }
  console.log(dp)
  return min(...dp[row - 1])
};

// @lc code=end