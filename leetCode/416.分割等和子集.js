/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  //本质上，这个也是dp题，其实就是0-1背包题目；
  //nums 代表物品，nums[i] 代笔第i个，背包容量是和 sum/2
  //问题就变成了0-1背包，求背包容量是 sum/2 时能不能装满背包；
  // dp[i][j] = x; 表示，对于前 i 个物品，当前背包的容量为 j 时，
  // 若 x 为 true，则说明可以恰好将背包装满，若 x 为 false，
  // 则说明不能恰好将背包装满。 
  // 很明显，答案就是求dp[n][sum/2]
  // base case, dp[0][...] = false 没有物品全是false  
  // dp[...][0] = true 背包为0全是true
  
};
// @lc code=end

