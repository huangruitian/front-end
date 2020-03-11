/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 15:58:24
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 15:58:38
 */
/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n===1) return "1";
  else {
      var str =  countAndSay(n-1);
      var temp = str[0];
      var count = 0;
      var ans = '';
      for (var i=0; i<str.length;i++){
          if (str[i]===temp) count++;
          else {
              // ans += count.toString() + temp.toString();
              ans += '' + count + temp;
              temp = str[i];
              count = 1;
          }
          // if (i===str.length-1) ans += count.toString() + temp.toString();
          if (i===str.length-1) ans += '' + count + temp;
      }
      return ans
  }
};
// @lc code=end

