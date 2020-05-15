/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    //  空	b	a	b	g	b	a	g
// 空	1	1	1	1	1	1	1	1
// b	0	1	1	2	2	3	3	3
// a	0	0	1	1	1	1	4	4
// g	0	0	0	0	1	1	1	5
// 要学会老老实实的归纳dp table, 找出表格的三个关系
// s[i] == t[i] 时，dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
// s[i] != t[i] 时，dp[i][j] = dp[i][j - 1]
 let m = s.length;
 let n = t.length;
 let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));
 for(let i = 0; i <= m; i++){
    dp[0][i] = 1
 }
 // 注意是n行，m列  
 for(let i = 1; i <= n; i++){
    for(let j = 1; j <= m; j++){
       if(s[j - 1] == t[i - 1]){
         dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
       }else{
         dp[i][j] = dp[i][j - 1]
       }
    }
 }
//  console.log(m,n, dp)
 return dp[n][m]
};
// @lc code=end

