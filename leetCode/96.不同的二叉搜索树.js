/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // 二叉搜索数的特征，左子树小于根，右子树大于根
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;                       // dp[0]初始化为1
    for(let i = 1; i <= n; i++)      // 从1...n的二叉搜索数数目
      for(let j = 1; j <= i; j++)    // 逐步选用1...n作为根节点
        dp[i] += dp[j-1] * dp[i-j];  // 左侧j-1个数，右侧i-j个数
    return dp[n]; 
};
// @lc code=end

