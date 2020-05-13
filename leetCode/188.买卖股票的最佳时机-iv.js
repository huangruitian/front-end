/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  //   let n = prices.length;
  //   if (n == 0) {
  //     return 0;
  //   }
  //   let maxTime = k;
  //   let dp = Array.from(new Array(n), () => new Array(maxTime + 1));
  //   for (let i = 0; i < n; i++) {
  //     for (let r = 0; r <= maxTime; r++) {
  //       dp[i][r] = new Array(2).fill(0);
  //     }
  //   }
  //   for (let i = 0; i < n; i++) {
  //     //如果k从0开始，还有处理一个边界
  //     for (let k = 1; k <= maxTime; k++) {
  //       if (i == 0) {
  //         dp[i][k][0] = 0;
  //         dp[i][k][1] = -prices[i];
  //         continue;
  //       }
  //       dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
  //       dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
  //     }
  //   }
  //   return dp[n - 1][maxTime][0];
  // 超时了，未什么呢？因为k > n/2 的时候开内存太大了；
  // 分情况优化解
  let n = prices.length;
  let maxTime = k;
  if (n == 0) {
    return 0;
  }
  // k = Infinity 可以优化
  let maxProfitInfinity = (prices) => {
    let n = prices.length;
    if(n == 0){
        return 0;
    }
    let dp_i_0 = 0;
    let dp_i_1 = -Infinity;
    for(let i = 0;i < n;i++){
        var tmp = dp_i_0; 
        dp_i_0 = Math.max(dp_i_0,dp_i_1+prices[i]);
        dp_i_1 = Math.max(tmp-prices[i],dp_i_1);
    }
    return dp_i_0;
  };
  if (maxTime > n / 2) {
    return maxProfitInfinity(prices);
  }
  // k < n/2，但是会大于2，所以不能复用 k = Infinity 的降维。三维必不可少   
  let dp = Array.from(new Array(n), () => new Array(maxTime + 1));
  for (let i = 0; i < n; i++) {
    for (let r = 0; r <= maxTime; r++) {
      dp[i][r] = new Array(2).fill(0);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let k = maxTime; k >= 1; k--) {
      if (i == 0) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
    }
  }
  return dp[n - 1][maxTime][0];
};
// @lc code=end
