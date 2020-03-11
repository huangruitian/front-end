/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 10:27:28
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 10:29:29
 */
/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = new Map()
    for(let i = 0, len = nums.length; i < len; i++){
      if(hash.has(nums[i])){
        return true
      }else{
        hash.set(nums[i], 1)
      }
    }
    return false
};
// @lc code=end

