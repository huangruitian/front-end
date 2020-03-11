/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 15:55:32
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 16:08:22
 */
/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
  if (K == 1) return 0;
  if (K % 2 == 0) return !kthGrammar(N, K / 2);
  return kthGrammar(N, (K + 1) / 2);
};
// @lc code=end