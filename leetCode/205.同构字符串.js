/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    // 因为indexOf会返回遍历这个字符串的遇到一个第一个指定值的下标，
    // 所以判断两个下标是否一样即可
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
    }
    return true;
};
// @lc code=end