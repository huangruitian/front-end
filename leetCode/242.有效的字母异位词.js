/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 15:11:35
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 15:11:42
 */
/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false
  }
  let len = t.length
  let arr1 = s.split('');
  let arr2 = t.split('');
  arr1.sort()
  arr2.sort()
  for (let i = 0; i < len; i++) {
    if(arr1[i] != arr2[i]){
       return false 
    }
  }
  return true
};
// @lc code=end

