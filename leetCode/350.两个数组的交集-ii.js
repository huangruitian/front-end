/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 10:46:28
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 11:10:40
 */
/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  //先排序，然后双指针
  // nums1.sort((a, b) => a - b)
  // nums2.sort((a, b) => a - b)
  // let res = []
  // let frist = 0, 
  //     second = 0;
  // while(frist < nums1.length && second < nums2.length){
  //   if(nums1[frist] == nums2[second]){
  //     res.push(nums1[frist])
  //     frist++
  //     second++
  //   }else if(nums1[frist] < nums2[second]){
  //     frist++
  //   }else{
  //     second++
  //   }
  // }
  // return res;
  //常规的hash方法
  let hash = new Map()
  let res = []
  for(let i = 0; i < nums1.length; i++) {
      if(hash.has(nums1[i])) {
          hash.set(nums1[i], hash.get(nums1[i]) + 1)
      } else {
         hash.set(nums1[i], 1) 
      }
  }
  for(let i = 0; i < nums2.length; i++) {
      let temp = nums2[i]
      let hashKey = hash.get(temp)
      if(hash.has(temp)) {
          res.push(temp)
          if(hashKey > 1) {
              hash.set(temp, hashKey - 1)
          } else {
              hash.delete(temp)
          }
      }
  }
  return res
};
// @lc code=end

