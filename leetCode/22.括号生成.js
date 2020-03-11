/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    function h(ps, l, r) {
        if (l == n && r == n) {
            res.push(ps);
            return;
        }
        if (l < n) {
            h(ps + '(', l + 1, r);
        }
        if (l > r) {
            h(ps + ')', l, r + 1);
        }
    }
    h('', 0, 0);
    return res;
};
// @lc code=end