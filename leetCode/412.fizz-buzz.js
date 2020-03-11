/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let res = []
    let first = "Fizz"
    let second = "Buzz"
    let three = "FizzBuzz"
    for (let i = 1; i <= n; i++) {
        let temp = '' + i
        if (i % 3 === 0 && i % 5 === 0) {
            temp = three
        } else if (i % 5 === 0) {
            temp = second
        } else if (i % 3 === 0) {
            temp = first
        }
        res.push(temp)
    }
    return res
};
// @lc code=end