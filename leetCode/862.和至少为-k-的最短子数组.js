/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-26 15:27:57
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-26 16:56:41
 */
/*
 * @lc app=leetcode.cn id=862 lang=javascript
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
  //1.双指针，当前和小于K的时候增大右指针，大于增大左指针
  // 这个题与最大子数组和类似，在最大子数组和的基础上增加了最短长度的限制，
  // 这时候的处理方法为：
  // 保存最短长度（通过当前遍历到的位置和记录的初始加和位置计算），
  // 若当前子数组和大于目标K，则将记录的初始位置加一。

  let left = 0
  let sum = 0
  let min = Number.MAX_VALUE
  let i = 0
  for (i, len = A.length; i < len; i++) {
    sum += A[i]
    if (sum >= K) {       //满足条件, 重新回头算
      (i - left + 1 < min) && (min = i - left + 1)
      i = left++          //减少一个数重新算
      sum = 0
    } else if (sum < 0) { //说明前面的不可取，有负数。
      left = i + 1        //避开负数重新算
      sum = 0
    }
  }
  if (sum >= K) min = i - left; //避免[1], 1情况
  return min === Number.MAX_VALUE ? -1 : min
};
// @lc code=end