/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = Math.max(...nums)
    let idx = nums.indexOf(max)
    nums.splice(idx,1)
    let res = nums.some((ele, idx) => ele * 2 > max)
    return res == true ? -1 : idx
};
// @lc code=end

