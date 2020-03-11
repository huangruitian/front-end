/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    let len = tokens.length
    let map = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => parseInt(a / b)
    }
    for (let i = 0; i < len; i++) {
        let d = tokens[i]
        if (map[d]) {
            let option = map[d]
            let b = stack.pop()
            let a = stack.pop()
            stack.push(option(a, b))
        } else {
            stack.push(+d)
        }
    }
    return stack.pop()
};
// @lc code=end