/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    // 1.双指针, s[l] == s[r] 相等时候收缩字符串; 
    // 当 当出现不相等的时候, [l, r - 1] || [l + 1, r] 为真就是真
    // 2.回文字符串可以用dp解法, 但是复杂度高了;
    let n = s.length;
    if (n < 2) return true;
    let l = 0, r = n - 1;
    // 收缩判断，回文的回文肯定是回文；
    while (l < r) {
      if (s[l] == s[r]) {
        l++;
        r--;
      } else {
        let right = true, left = true;
        // 删除右边判断好了
        for (let i = l, j = r - 1; i < j; i++, j--) {
          if (s[i] != s[j]) {
            right = false;
            break;
          }
        }
        // 删除左边判断好了
        for (let i = l + 1, j = r; i < j; i++, j--) {
          if (s[i] != s[j]) {
            left = false;
            break;
          }
        }
        return right || left;
      }
    }
    return true;
};
// @lc code=end
