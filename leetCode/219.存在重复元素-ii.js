/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-26 10:11:09
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-26 10:12:49
 */
/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // 用散列表来维护这个k大小的滑动窗口。如果存在返回true
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
};
// @lc code=end