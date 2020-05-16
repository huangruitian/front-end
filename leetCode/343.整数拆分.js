/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    // 第一直觉，暴力搜；但是会有很多重复的项；
    // 想下递归的状态树，很明显是递归;
    // f(n) = max(res, max(i * f(n-i), i * (n - i)))
    // i * (n - i) 表示当前不需要继续分裂了，否则递归；
    // let memo = Array(n + 1).fill(0)
    // return helper(n)
    // function helper(n) {
    //     if (n == 2) {
    //         return 1;
    //     }
    //     if(memo[n] != 0){
    //         return memo[n]
    //     }
    //     let res = -1;
    //     for (let i = 1; i <= n - 1; i++) {
    //         res = Math.max(res, Math.max(i * (n - i), i * integerBreak(n - i)));
    //     }
    //     memo[n] = res
    //     return res;
    // }
    // 还是超时, dp解法
    // dp[i] 表示 f(i)，所获得的最大乘积
    // dp[i] = Math.max(dp[i], Math.max(i * (n - i), i * dp[n - i]));
    // 边界是1-2 都是1 dp[i] = 1
    // 数组开多大？到n的乘积，开n+1
    // 怎么递推呢？正着推即可
    if(n == 2) return 1;
    let dp = Array(n + 1).fill(0)
    dp[0] = 1, dp[1] = 1;
    for(let i = 3; i <= n; i++){
        for(let j = 1; j < i; j++){
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n]
};


// @lc code=end