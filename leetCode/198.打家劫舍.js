/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 边界。在解决动态规划的题目时候一定要往规模更小的情况和背包问题想
    //dp[1] = nums[0]
    //dp[2] = max(nums[1], nums[0])
    //动态转移方程，最优子结构
    // dp[i] = max(nums[i] + dp[i-2], dp[i-1])
    // let len = nums.length
    // if(!len) return 0
    // let dp = Array(len)
    // dp[0] = nums[0]
    // dp[1] = Math.max(nums[0], nums[1])
    // for(let i = 2; i < len; i++){
    //     dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
    // }
    // return dp[len - 1]
    
    //只需要前两个，所以可以优化内存
    let res = 0
    let len = nums.length
    if(!len) return res; 
    let first = nums[0]
    let second = nums[1] > first ? nums[1] : first
    if(len < 3) return second;
    for(let i = 2; i < len; i++){
        res = Math.max(second, nums[i] + first)
        first = second
        second = res
    }
    return res
};
// @lc code=end

