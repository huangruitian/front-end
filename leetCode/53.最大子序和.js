/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 往背包问题想，要当前数大还是不要大？
    // 一定要明确dp的定义含义，dp子结构是独立的。
    // 而且存在数学归纳方程
    // 边界是1个数
    // dp[i] = max(dp[i - 1] + nums[i], nums[i]);
    // let len = nums.length
    // let dp = Array(len).fill(0)
    // dp[0] = nums[0]
    let res = nums[0]
    let sum = nums[0]
    for(let i = 1, len = nums.length; i < len; i++){
        // dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        if(sum > 0){
            sum += nums[i]
        }else{
            sum = nums[i]
        }
        if(sum > res) res = sum;
    }
    return res
};
// @lc code=end

