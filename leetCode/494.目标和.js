/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    //深度优先搜索题
    function dfs(nums, S, i, sum){
        //已经选了全部的数
        if (i == nums.length) {
            //等于目标值就是一种选择
            return S == sum ? 1 : 0;
        }
        //递归下加减                
        return dfs(nums, S, i + 1, sum + nums[i]) + dfs(nums, S, i + 1, sum - nums[i]); 
    }
    return dfs(nums, S, 0, 0)
};

// @lc code=end

