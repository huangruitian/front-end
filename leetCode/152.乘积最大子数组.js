/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // 1.nums 数字有正数负数，正数乘正数，负数乘负数；才能拿到最大值
    // 2.出现负数就调换 imax 和 imin，然后进行计算
    // 所以：
    // imax = Math.max(imax * nums[i], nums[i])
    // imin = Math.min(imin*nums[i], nums[i]);
    let imax = 1, imin = 1, max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++){
       if(nums[i] < 0){
           let t = imax
           imax = imin
           imin = t
       }
       imax = Math.max(imax * nums[i], nums[i])
       imin = Math.min(imin * nums[i], nums[i]);

       max = Math.max(imax, max)
    }
    return max
};
// @lc code=end
