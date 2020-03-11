/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    // if (n < 2) return 0
    // let count = 0;
    // for (let i = 2; i < n; i++)
    //     if (isPrime(i)) count++;
    // return count;

    let isPrim = new Array(n).fill(true);
    for (let i = 2; i * i < n; i++) 
        if (isPrim[i]) 
            for (let j = i * i; j < n; j += i) 
                isPrim[j] = false;
                
    let count = 0;
    for (let i = 2; i < n; i++)
        if (isPrim[i]) count++;
    return count;
};

// 判断整数 n 是否是素数
function isPrime(n) {
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            // 有其他整除因子
            return false;
    return true;
}

// @lc code=end