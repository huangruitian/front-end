/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let min = Math.max(...nums)
    let idx = nums.indexOf(min)
    if(idx == 0){
      nums.sort((a, b) => a - b)
    }else{
      [nums[idx], nums[idx - 1]] = [nums[idx - 1], nums[idx]]
    }
};
// @lc code=end

