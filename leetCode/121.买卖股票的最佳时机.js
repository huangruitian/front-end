/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0,
        min = prices[0];
    for (let i = 1, len = prices.length; i < len; i++) {
        if (prices[i] > prices[i - 1]) { //最小值
            max = Math.max(max, prices[i] - min)
        } else {
            min = Math.min(min, prices[i])
        }
    }
    return max
};
// @lc code=end