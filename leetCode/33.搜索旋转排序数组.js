/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-26 17:53:22
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-26 18:09:26
 */
/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let len = nums.length;
  let left = 0,
    right = len - 1;
  while (left <= right) {
    let mid = (left + right) >>> 1;
    if (nums[mid] === target)
      return mid;
    else if (nums[mid] < nums[right]) {                //旋转数组在左边，右边正常
      if (nums[mid] < target && target <= nums[right]) //确定目标在右边
        left = mid + 1;
      else
        right = mid - 1;
    } else {
      if (nums[left] <= target && target < nums[mid])
        right = mid - 1;
      else
        left = mid + 1;
    }
  }
  return -1;
};
// @lc code=end