/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 11:40:15
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 14:40:08
 */
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // let len = nums.length
  // let temp = []
  // for(let i = 0; i < len; i++){
  //   if(nums[i] != 0){
  //      temp.push(nums[i])
  //      nums[i] = 0
  //   }
  // }
  // for(let i = 0, len = temp.length; i < len; i++){
  //   nums[i] = temp[i]
  // }

  //更简洁的双指针
  let left = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]]
      left++
    }
  }
};
// @lc code=end