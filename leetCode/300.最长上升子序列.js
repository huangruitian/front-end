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
<<<<<<< HEAD
  // dp[i] 以nums[i]结尾的最长上升子序列
  // index:  0  1  2  3  4  5
  //  nums:  1  4  3  4  2  3
  //    dp:  1  2  2  3  2  3
  // 用当前结尾的数nums[i], 去找前面比它小的数的 dp + 1 即可，
  // 一直找，找到一个最大的保存
  // 1.边界:        全都是1
  // 2.最优子结构：  dp[i], 以nums[i]结尾的最长上升子序列（不用连续，子串才连续）
  // 3.状态转移方程：dp[i] = max(dp[i], dp[j]), j为 1到(i-1)
  let len = nums.length;
  if (len === 0 ) return 0;
  if (len === 1 ) return 1;
  // let max = Math.max
  // let dp = Array(len).fill(1)
  // if (!len) return 0;
  // for (let i = 0; i < len; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {        //找前面比当前数nums[i]小的
  //       dp[i] = max(dp[i], dp[j] + 1) //max 比较取遇到的最大值
  //     }
  //   }
  // }
  // // console.log(dp)
  // return max(...dp)

  // 1.dp解法
  // dp[i] 表示以nums[i]结尾的最长上升子序列
  // dp[i] = 找前面小于nums[i]的数 + 1
  let dp = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if(nums[i] > nums[j]){
        dp[i] = Math.max(dp[j] + 1, dp[i])
=======
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
>>>>>>> 5f731c6386600c7eb9ef1b28ba96fcc526cc5192
      }
    }
  }
  console.log(dp)
  return Math.max(...dp)
};
// @lc code=end
