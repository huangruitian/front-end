/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums3 = [].concat(nums1.slice(0, m))
    let i = 0;
    while(nums2.length && nums3.length){
      if(nums2[0] < nums3[0]){
         nums1[i] = nums2.shift()
         n--
      }else{
         nums1[i] = nums3.shift()
         m--
      }
      i++  
    }
    while(n > 0){
         nums1[i] = nums2.shift()
         n--
         i++
    } 
    while(m > 0){
         nums1[i] = nums3.shift()
         m--
         i++
    }
    return nums1 
};
// @lc code=end

