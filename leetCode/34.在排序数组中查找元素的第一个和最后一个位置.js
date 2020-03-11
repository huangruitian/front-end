/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //找左边界和右边界
    let res = [-1, -1]
    let left = 0
    let right = nums.length - 1
    //左边界
    while(left <= right){
        let mid = (left + right) >>> 1
        if(target <= nums[mid]){
           right = mid - 1
        }else{
           left = mid + 1 
        }
    }
    res[0] =  nums[left] === target ? left : -1
    left = 0
    right = nums.length - 1
    while(left <= right){
        let mid = (left + right) >>> 1
        if(target >= nums[mid]){
           left = mid + 1 
        }else{
           right = mid - 1
        }
    }
    res[1] = nums[right] === target ? right : -1
    return res
};
// @lc code=end

