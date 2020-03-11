/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(!s) return true;
    let map = {
        '(': ')',
        '{': '}',
        '[': ']',
      }
    let stack = []
    for (let i = 0; i < s.length; i++) {
      let d = s[i]
      if(map[d]){
          stack.push(d)
      }else{
          //  ")"
          let len = stack.length
          let last = stack[len - 1]
          if(len == 0 || s[i] != map[last]){
              return false
          }
          stack.pop()
      }
    }
    return stack.length == 0
};
// @lc code=end