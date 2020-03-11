/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-26 14:30:35
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-29 11:15:52
 */
/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // 1.这种hash 时空是：O(k*n)，O(n), 受K的影响，K越大，时间复杂度会变成O(n*n)
  // 2.先像hash一样存一个map，再构建一个K大小的最小堆，当新元素比堆顶大，弹出堆顶。新元素下沉
  let map = new Map()
  for(let i = 0, len = nums.length; i < len; i++){
      if(map.has(nums[i])){
         map.set(nums[i], map.get(nums[i]) + 1)
      }else{
         map.set(nums[i], 1)
      }
  }
  let res = []
  let max = 0
  let item = 0
  while(k > 0){
      k--
      for([key, val] of map){
          if(val > max){
              max = val
              item = key
          }
      }
      //一趟找一个最大值
      map.delete(item)
      res.push(item)
      max = 0
  }
  return res
};
// @lc code=end

