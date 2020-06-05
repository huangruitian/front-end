/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
<<<<<<< HEAD
var nthUglyNumber = function(n) {

};
// @lc code=end

=======
var nthUglyNumber = function (n) {
    //1-n
    //1是第一个丑数，然后网上推。就是初始值
    //dp[i] 表示第i个丑数，丑数的关键点是上一个的 2 3 5 的倍数
    //转移方程：dp[i] = min(2 * dp[p2], 3 * dp[p3], 5 * dp[p5])
    // p2, p3, p5 表示三个倍数的前一个丑数的指针   
    //要用到dp[n - 1]，开n
    let dp = [1]
    let p2 = p3 = p5 = 0;
    for (let i = 1; i < n; i++) {
        let min = Math.min(2 * dp[p2], 3 * dp[p3], 5 * dp[p5])
        if (min == 2 * dp[p2]) {
            p2++
        }
        if (min == 3 * dp[p3]) {
            p3++;
        }
        if(min == 5 * dp[p5]) {
            p5++;
        }
        dp.push(min)
    }
    return dp[n - 1]
};
// @lc code=end
>>>>>>> 5f731c6386600c7eb9ef1b28ba96fcc526cc5192
