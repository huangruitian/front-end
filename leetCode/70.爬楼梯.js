/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 边界 1，2，
    // 最优子结构和动态方程 fn(n) = fn(n-1) + fn(n-2)
    if(n < 3) return n
    let first = 1
    let second = 2
    let res = 0
    for(let i = 3; i <= n; i++){
        res = first + second
        first = second
        second = res
    }
    return res
};
// @lc code=end

