/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 10:55:57
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 11:53:41
 */
/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  //滑动窗口，滑呀滑
  //当窗口内的值小于s, 右边界扩张
  //当窗口的值大于等于s, 左边界扩张
  let n = nums.length;
  let ans = Number.MAX_VALUE;
  let sum = 0; //右指针
  let win = []
  for (let i = 0; i < n; i++) {
      win.push(nums[i])
      sum = win.reduce((pre, cur) => pre + cur, 0);    //加进结果
      while (sum >= s) { //满足条件
          ans = Math.min(ans, win.length);
          win.shift()
          sum = win.reduce((pre, cur) => pre + cur, 0);
      }
  }
  return (ans != Number.MAX_VALUE) ? ans : 0;

  //优化
  // let n = nums.length;
  // let ans = Number.MAX_VALUE;
  // let left = 0; //左指针
  // let sum = 0; //右指针
  // for (let i = 0; i < n; i++) {
  //     sum += nums[i];    //加进结果
  //     while (sum >= s) { //满足条件
  //         ans = Math.min(ans, i + 1 - left);
  //         sum -= nums[left++];
  //     }
  // }
  // return (ans != Number.MAX_VALUE) ? ans : 0;
};
// @lc code=end

