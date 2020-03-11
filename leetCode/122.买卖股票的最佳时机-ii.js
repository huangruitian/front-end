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
var maxProfit = function(prices) {
    //贪心策略，在股票最低的时候买入，高的时候卖出，多次进行交易
    let min = prices[0]
    let res = 0
    for(let i = 1, len = prices.length; i < len; i++){
      if(prices[i] > min){
        res += prices[i] - min
      }
      min = prices[i]
    }
    return res 
};
// @lc code=end

