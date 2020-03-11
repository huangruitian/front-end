/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-02 08:41:47
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-02 09:13:15
 */
/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  //回溯法分割
  let res = []
  backtrack(res, s, [])
  return res;
};

function backtrack(res, s, tmp) {
  if (!s) res.push(tmp);
  for (let i = 1; i <= s.length; i++) {
    if (isPalidrome(s.substring(0, i))) {
      tmp.push(s.substring(0, i));
      console.log(tmp)
      backtrack(res, s.substring(i, s.length), [...tmp]);
      tmp.pop();
    }
  }
}

function isPalidrome(str) {
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) return false
    left++
    right--
  }
  return true
}
// @lc code=end