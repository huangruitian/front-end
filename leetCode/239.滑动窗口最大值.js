/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-02 10:47:27
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-02 10:47:37
 */
/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let len = nums.length;
  if (len * k == 0) return [];
  if (k == 1) return nums;
  let queue = nums.slice(0, k);
  let cur = k - 1;
  let target = [];
  let max;
  while (cur < len) {
    max = Math.max(...queue);
    target.push(max);
    cur++;
    queue.push(nums[cur]);
    queue.shift();
  }
  return target;
};
// @lc code=end