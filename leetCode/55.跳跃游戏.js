/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-29 13:12:48
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-29 13:12:56
 */
/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //贪心算法，每次都跳最远的，不过我们反过来跳，看看能不能调回0的初始位置
  let lastPost = nums.length - 1
  for (let i = lastPost; i >= 0; i--) {
    if (nums[i] + i >= lastPost) { //当前位置能走到最后的位置嘛？
      lastPost = i                 //能，更新最后的位置
    }
  }
  return lastPost === 0
};
// @lc code=end