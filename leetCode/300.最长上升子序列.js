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
  // dp[i] 以nums[i]结尾的最长上升子序列
  // index:  0  1  2  3  4  5 
  //  nums:  1  4  3  4  2  3
  //    dp:  1  2  2  3  2  3 
  // 用当前结尾的数nums[i], 去找前面比它小的数的 dp + 1 即可，
  // 一直找，找到一个最大的保存
  // 1.边界:        全都是1
  // 2.最优子结构：  dp[i], 以nums[i]结尾的最长上升子序列（不用连续，子串才连续）
  // 3.状态转移方程：dp[i] = max(dp[i], dp[j]), j为 1到(i-1)
  let len = nums.length
  if(len === 1) return 1
  let max = Math.max
  let dp = Array(len).fill(1)
  if (!len) return 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {        //找前面比当前数nums[i]小的
        dp[i] = max(dp[i], dp[j] + 1) //max 比较取遇到的最大值
      }
    }
  }
  // console.log(dp)
  return max(...dp)
};
// @lc code=end