/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 无限次交易，同样可以压缩k
    // 关键是冷冻期，我们怎么考虑呢？
    // 第i-2天才是上一步交易的开始状态，第i-1天不能交易
    // 所以公式改变为
    // dp[i][0] = Max(dp[i-1][0],dp[i-1][1] + prices[i])
    // dp[i][1] = Max(dp[i-1][1],dp[i-2][0] - prices[i])
    let n = prices.length;
    if(n == 0){
        return 0;
    }
    let dp = Array.from(new Array(n),() => new Array(2));
    for(var i = 0; i < n; i++){
        if(i == 0){
            dp[0][0] = 0;
            dp[0][1] = -prices[i];
            continue;
        }else if(i == 1){
            dp[1][0] = Math.max(dp[0][0],dp[0][1] + prices[i]);
            dp[1][1] = Math.max(dp[0][1], -prices[i]);
            continue;
        }
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1],dp[i-2][0] - prices[i]);
    }
    return dp[n-1][0];
};
// @lc code=end

