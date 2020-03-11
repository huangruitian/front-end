/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-18 14:21:49
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-18 14:42:41
 */
/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let map = new Map();
  let len = heights.length
  let res = 0
  for (let i = 0; i < len; i++) {
    map.set(i, heights[i])
  }
  // 排序，位置变了就是要挪动的
  heights.sort((a, b) => a - b)
  for ([idx, val] of map) {
    if(heights[idx] !== val){
      res++
    }
  }
  return res
};
// @lc code=end