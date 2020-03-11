/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-02 10:09:21
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-02 10:15:00
 */
/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  //维护一个最大值和一个最小值。当正数的时候正常。负数的时候就相反了
  let max = Number.MIN_SAFE_INTEGER,
      imax = 1,
      imin = 1;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] < 0) {
      let tmp = imax;
      imax = imin;
      imin = tmp;
    }
    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);
    max = Math.max(max, imax);
  }
  return max;
};
// @lc code=end