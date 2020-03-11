/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-29 14:10:43
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-29 16:02:49
 */
/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 1.最优子结构：dp[i][j] 代表的是金额i能装到j枚硬币的最少数量
  // 2.转移方程：dp[i][j] = min(d[i-coins[j]][j] + 1, dp[i][j])
  //  1）条件:（i > coins[j] && d[i-coins[j]][j] != Number.MAX_VALUE）
  //  2）i >= coins[j]代表当前的金额必须要大于等于当前的硬币才能选择
  //  3）d[i - coins[j]][j] != Number.MAX_VALUE，代表选择当前金额为 coins[j] 的硬币之后是个可行解
  // 3.边界:
  // 金额为0的时候都是0，其它都初始化为不可行解 Number.MAX_VALUE
  // 优化：因为其实只用到金额一行，所有可以用一维dp
  let max = Number.MAX_SAFE_INTEGER
  let coinsNum = coins.length
  let dp = Array(amount + 1).fill(max)
  dp[0] = 0
  for (let i = 0; i < coinsNum; i++) {         //物品数量coins（物品数量）
    for (let j = coins[i]; j <= amount; j++) { //有用的钱数(背包容量)
      if (dp[j - coins[i]] !== max) {
        dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]) 
      }
    }
  }
  return dp[amount] === max ? -1 : dp[amount]
};
// @lc code=end