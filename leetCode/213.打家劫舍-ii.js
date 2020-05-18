/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //只需要前两个，所以可以优化内存
    let len = nums.length
    if(!len) return 0
    if(len == 1) return nums[0]
    return Math.max(getRob(nums.slice(1)), getRob(nums.slice(0, len - 1)))
};

function getRob(nums){
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
}
// @lc code=end

