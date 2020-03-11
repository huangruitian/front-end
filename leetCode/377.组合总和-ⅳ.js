/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    let len = nums.length;
    if (len == 0) {
        return 0;
    }
    let dp = Array(target + 1).fill(0);
    // 边界，一个数都不选
    dp[0] = 1;
    for (let i = 1; i <= target; i++) { //背包容量
        for (let j = 0; j < len; j++) { //物品数量
            if (i - nums[j] >= 0) {     //能装得下
                dp[i] += dp[i - nums[j]];
            }
        }
    }
    return dp[target];
};
// @lc code=end