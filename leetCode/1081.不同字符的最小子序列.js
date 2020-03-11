/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-18 12:50:52
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-18 12:59:06
 */
/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
  let len = text.length;
  let stack = [];
  for (let i = 0; i < len; i++) {
      let c = text[i];
      //栈中有这个字符，啥都不干
      if (stack.indexOf(c) !== -1) {
          continue;
      }
      //栈不为空，栈顶字符大于当前字符，并且后面还有栈顶字符，就pop 
      while (stack.length && c < stack[stack.length - 1] && text.indexOf(stack[stack.length - 1], i) != -1) {
          stack.pop();
      }
      stack.push(c);
  }
  return stack.join('');
};
// @lc code=end

