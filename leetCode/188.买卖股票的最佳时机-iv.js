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
var maxProfit = function(k, prices) {
    let n = prices.length;
    let maxTime = k;
    if(n == 0){
        return 0;
    }
    let maxProfitInfinity = (prices) => {
        let n = prices.length;
        if(n == 0){
            return 0;
        }
        let dp = Array.from(new Array(n),() => new Array(2));
        for(let i = 0;i < n;i++){
            if(i == 0){
                dp[0][0] = 0;
                dp[0][1] = -prices[0];
                continue;
            }
            dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
            dp[i][1] = Math.max(dp[i-1][0]-prices[i],dp[i-1][1]);
        }
        return dp[n-1][0];
    };
    if(maxTime > n/2){
        return maxProfitInfinity(prices);
    }
    let dp = Array.from(new Array(n),() => new Array(maxTime+1));
    for(let i = 0;i < n;i++){
        for(let r = 0;r <= maxTime;r++){
            dp[i][r] = new Array(2).fill(0);
        }
    }
    for(let i = 0;i < n;i++){
        for(let k = maxTime;k >= 1;k--){
            if(i == 0){
                dp[i][k][0] = 0;
                dp[i][k][1] = - prices[i];
                continue;
            }
            dp[i][k][0] = Math.max(dp[i-1][k][0],dp[i-1][k][1] + prices[i]);
            dp[i][k][1] = Math.max(dp[i-1][k][1],dp[i-1][k-1][0] - prices[i]);
        }
    }
    return dp[n-1][maxTime][0];
};
// @lc code=end

