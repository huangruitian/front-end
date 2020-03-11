/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-02 08:31:39
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-02 11:11:14
 */
/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 记录前后缀和后缀和
  n = nums.length
  res = Array(n).fill(0)
  res[0] = 1
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }
  right = 1
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right
    right *= nums[i]
  }
  return res
  
};
// @lc code=end