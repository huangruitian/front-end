/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 14:32:10
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 14:34:18
 */
/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let right = s.length - 1
    let left = 0
    let temp = ''
    while(left < right){
       temp = s[left]
       s[left] = s[right]
       s[right] = temp
       left++
       right--
    }
};
// @lc code=end

