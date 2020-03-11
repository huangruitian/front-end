/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 10:31:32
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 10:44:09
 */
/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = new Map()
    nums.forEach(d => {
      if(!hash.has(d)){
         hash.set(d, 1)
      }else{
         hash.set(d, hash.get(d) + 1)
      }
    })
    for([key, val] of hash){
       if(val == 1){
         return key
       }
    }
    // 只出现两次的数异或相当于没有  
    // let ans = 0;
    // for(const num of nums) {
    //     ans ^= num;
    // }
    // return ans;
};
// @lc code=end

