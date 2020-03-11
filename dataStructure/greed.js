/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-09-28 09:22:36
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-11 11:51:06
 */
// 贪心算法
// 设计实现策略
// 买卖股票最大价值（最大利润）
// 通过分析策略实现算法
// 关心的是局部最优解，并不是实际的最优解(不是完美解决方案，但接近完美)
// 可以通过不断的优化局部最优解达到最优解



/** 分发饼干
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b) //胃口
  s.sort((a, b) => a - b) //饼干
  let gLen = g.length
  let sLen = s.length
  let i = 0 //胃口
  let j = 0
  let sum = 0
  while (i < gLen && j < sLen) {
    if (s[j] >= g[i]) {
      i++
      sum++
    }
    j++
  }
  return sum
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map()
  let len = nums.length
  while(len > 0){
    if (!map.has(d)) {
      map.set(d, 1)
    } else {
      return true
    }
    len--;
  }
  return false
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  for(let i = 0, len = nums.length; i < len; i++){
    if(nums[i] == nums[k]){
      return true
    }
  }
  return false
};