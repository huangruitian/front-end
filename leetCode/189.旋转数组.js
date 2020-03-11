/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 10:17:08
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 10:25:44
 */
/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  while(k > 0){
    nums.unshift(nums.pop())
    k--
  }
};
// @lc code=end

