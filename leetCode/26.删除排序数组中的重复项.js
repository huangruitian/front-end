/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 09:34:21
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-06 10:36:30
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let i = 1
    // while(i < nums.length){
    //    if(nums[i] == nums[i - 1]){
    //      nums.splice(i - 1, 1)
    //    }else{
    //      i++
    //    }
    // }
    // return nums.length

    let map = new Set()
    let res = []
    nums.forEach(d => {
      if(!map.has(d)){
        res.push(d)
        map.add(d)
      }
    })
    return res.length
};
// @lc code=end

