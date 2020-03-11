/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-28 11:39:11
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-28 11:39:20
 */
/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    //其实就是用三个变量，往前填坑，填满了就可以retuen true了。
    //怎么填呢？先填第一个，再填第二个，再填第三个，这样保证i, j, k三个数索引满足条件
    let first = Number.MAX_VALUE
    let second = Number.MAX_VALUE
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= first){
            first = nums[i]
        }else if(nums[i] <= second){
            second = nums[i]
        }else{
            return true
        }
    }
    return false
};
// @lc code=end

