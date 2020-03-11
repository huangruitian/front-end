/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 计算各个位数不同的数字个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 10;
    }
    let temp = 9;
    let sum = 10;
    for (let i = 2; i <= n; i++) {
        temp = temp * (10 - i + 1);
        sum += temp;
    }
    return sum;
};

// @lc code=end