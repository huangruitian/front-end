/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 09:26:54
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 12:51:31
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const arrMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    //巧妙的让相同的数设置最大的index;
    arrMap.set(nums[i], i)
  }
  let temp = 0
  for (let i = 0; i < nums.length; i++) {
    temp = target - nums[i];
    if (arrMap.has(temp) && arrMap.get(temp) !== i) {
      return [i, arrMap.get(temp)];
    }

  }
};
// @lc code=end