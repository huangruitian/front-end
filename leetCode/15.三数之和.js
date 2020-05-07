/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = []
    // 排序
    nums.sort((a, b) => a - b)
    // 用三个指针，固定一个夹逼两个
    for (let i = 0, len = nums.length; i < len - 2; i++) {
        //第一个都大于0了，相加肯定大于0    
        if (nums[i] > 0) {
            break;
        }
        //防止重复 
        if (i && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[i], nums[left++], nums[right--]])
                //怎么避免重复的数
                while (nums[left] == nums[left - 1]) {
                    left++
                }
                while (nums[right] == nums[right + 1]) {
                    right--
                }
            } else if (sum > 0) {
                right--;
            } else {
                left++
            }
        }
    }
    return result
};
// @lc code=end