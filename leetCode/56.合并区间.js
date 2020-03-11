/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-29 11:34:46
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-29 13:12:30
 */
/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 1, len = intervals.length; i < len; i++) {
    if(intervals[i][0] <= intervals[i - 1][1]){
      let s = intervals[i][0] < intervals[i - 1][0] ? intervals[i][0] : intervals[i - 1][0]
      let end = intervals[i][1] > intervals[i - 1][1] ? intervals[i][1] : intervals[i - 1][1]
      intervals.splice(i-1, 2, undefined, [s, end])
    }
  }
  return intervals.filter(Boolean)
};
// @lc code=end

