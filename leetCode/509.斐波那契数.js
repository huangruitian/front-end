/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
   if(N == 0) return 0;
   if(N == 1) return 1;
   let pre = fib(N - 1);
   let cur = fib(N - 2)
   return pre + cur
};
// @lc code=end

