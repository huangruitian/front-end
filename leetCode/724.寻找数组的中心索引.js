/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    //前缀和
    let leftsum = 0,
        sum = nums.reduce((pre, cur) => pre + cur, 0)
    for (let i = 0; i < nums.length; ++i) {
        if (leftsum == sum - leftsum - nums[i]) return i;
        leftsum += nums[i];
    }
    return -1;
};
// @lc code=end

