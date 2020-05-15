/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-02 09:18:27
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-02 09:54:51
 */
/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  //1.不拆分时，直接判断s在不在，wordDict即可
  //2.把问题划分成子问题，当前面的可以后面的也可以
  // dp[i], 以i结尾的单词在不在字典中
  // 边界是dp[0] = true
  // let map = new Map()
  // let len = s.length
  // wordDict.forEach(d => {
  //   if (!map.has(d)) {
  //     map.set(d, true)
  //   }
  // })
  // let dp = Array(len + 1).fill(false)
  // dp[0] = true
  // let str = ''
  // for (let i = 1; i <= len; i++) {
  //   for (let j = 0; j < i; j++) {
  //     str = s.substring(j, i)
  //     if(dp[j] && map.has(str)){ //leet code 两个单词都在
  //       dp[i] = true
  //     }
  //   }
  // }
  // // console.log(dp)
  // return dp[len]

  // 1.搜索 wordDict，DFS/BFS
  // 2.确定状态：以i结尾的单词在不在字典中；
  // 3.边界确定：dp[0] = true
  let map = new Map()
  let len = s.length
  let dp = Array.from(new Array(len+1), () => false)
  dp[0] = true
  wordDict.forEach(d => map.set(d, true))
  for(let i = 0; i <= len; i++){
    for(let j = 0; j <= len; j++){
      let str = s.substring(i, j)
       if(map.has(str) && dp[i]){
         dp[j] = true
       }
    }
  }
  return dp[len]
};
// @lc code=end