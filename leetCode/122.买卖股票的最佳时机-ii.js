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

  let n = prices.length;
  if (!n) return 0;
  let dp_i_0 = 0, de_i_1 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, de_i_1 + prices[i]);
    de_i_1 = Math.max(de_i_1, temp - prices[i]);
  }
  return dp_i_0;
};
// @lc code=end
