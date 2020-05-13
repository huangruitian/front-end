/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let n = prices.length;
    if(n == 0){
        return 0;
    }
    // let dp = Array.from(new Array(n),() => new Array(2));
    // for(let i = 0;i < n;i++){
    //     if(i == 0){
    //         dp[0][0] = Math.max(0,-Infinity+prices[0]);
    //         dp[0][1] = Math.max(-Infinity,0 - prices[0] - fee);
    //         continue;
    //     }
    //     dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i]);
    //     dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] - prices[i] - fee);
    // }
    // return dp[n-1][0];
    // 降维优化
    let dp_i_0 = 0;
    let dp_i_1 = -Infinity;
    for(let i = 0;i < n;i++){
        let tmp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0,dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1,tmp - prices[i] - fee);
    }
    return dp_i_0;
};
// @lc code=end

