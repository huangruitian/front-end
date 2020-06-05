/*
 * @Description:
 * @Autor: hrt
 * @Date: 2019-11-29 16:41:28
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-29 17:52:18
 */
/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 定义状态：dp[i] 表示以nums[i] 结尾的最长上升子序列
  // 转移方程：找前面比当前nums[i]小的数然后加1；即是当前的最长上升子序列
  // dp[i] = max(dp[i], dp[j] + 1); j < i, nums[i] > nums[j]
  // 边界和初始值：边界就是nums数组，初始值dp全是1
  // 前两个问题一定要想得非常清楚，不然就是dp不出！！！
  let n = nums.length
  if(!n) return 0;
  let dp = Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    // 往前找小的
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1) 
      }
    }
  }
  console.log(dp)
  return Math.max(...dp)
};
// @lc code=end
