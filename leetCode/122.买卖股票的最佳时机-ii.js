/*
 * @Description:
 * @Autor: hrt
 * @Date: 2019-11-22 09:57:14
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 10:11:45
 */
/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //贪心策略，在股票最低的时候买入，高的时候卖出，多次进行交易
  // let min = prices[0]
  // let res = 0
  // for(let i = 1, len = prices.length; i < len; i++){
  //   if(prices[i] > min){
  //     res += prices[i] - min
  //   }
  //   min = prices[i]
  // }
  // return res

  // dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
  // dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
  // k = 无限次，那么k-1 和 k 是一样的，所以可以把k简化掉
  // dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
  // dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  // 我们再来分析一下base case
  // dp[i - 1][0]：未开始，未持有股票，即为0
  // dp[i - 1][1]：未开始，就持有股票，不可能，用 Infinity 表示
  // dp[i][0] = Math.max(0, Infinity + prices[i]) = 0
  // dp[i][1] = Math.max(Infinity, 0 - prices[i]) = -prices[i]
  // 故边界就是 0 和 -prices[i]
  let n = prices.length
  // let dp = Array.from(new Array(n), () => new Array(2))
  // for(let i = 0; i < n; i++){
  //   if(i - 1 === -1){
  //     dp[i][0] = 0;
  //     dp[i][1] = -prices[i];
  //     continue;
  //   }
  //   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
  //   dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  // }
  // // console.log(dp)
  // return dp[n - 1][0]

  // 还是只和两个元素有关
  let dp_i_0 = 0, dp_i_1 = -Infinity
  for(let i = 0; i < n; i++){
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i])
  }
  return dp_i_0
  // 秒杀第二道
};
// @lc code=end
