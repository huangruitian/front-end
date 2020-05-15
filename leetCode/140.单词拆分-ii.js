/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  //1.爆搜DFS wordDict === s，肯定会超时
  //2.先用139的预扫，如果不能拼接成单词直接返回。然后回溯
  let res = [];
  if (!isWork(s, wordDict)) {
    return res;
  }
  //回溯
  trackBack(s, wordDict, "", res);
  return res;
};

// 回溯法其实就是特殊的DFS，写代码的时候要细心点
function trackBack(s, wordDict, temp, res) {
  if (s.length === 0) {
    res.push(temp.trim());
    return;
  } else {
    for (let i = 0; i < wordDict.length; i++) {
      if (s.startsWith(wordDict[i])) {
        trackBack(s.slice(wordDict[i].length), wordDict, temp + " " + wordDict[i], res);
      }
    }
  }
}

function isWork(s, wordDict) {
  let map = new Map();
  let len = s.length;
  let dp = Array.from(new Array(len + 1), () => false);
  dp[0] = true;
  wordDict.forEach((d) => map.set(d, true));
  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= len; j++) {
      let str = s.substring(i, j);
      if (map.has(str) && dp[i]) {
        dp[j] = true;
      }
    }
  }
  return dp[len];
}
// @lc code=end
