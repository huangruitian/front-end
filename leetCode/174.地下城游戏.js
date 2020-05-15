/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let h = dungeon.length;
  let l = dungeon[0].length;
  let dp = Array.from(new Array(h), () => new Array(l).fill(0));
  //初始化二维数组
  // 最低生命值为1
  for (let i = h - 1; i >= 0; i--) {
    for (let j = l - 1; j >= 0; j--) {
      if (i == h - 1 && j == l - 1) {
        // 保存到达当前点所需的生命值，如果小于1，置为1
        // 例如 该点为-6 则该点所需为 7
        dp[i][j] = Math.max(1, 1 - dungeon[i][j]);
      } else if (i == h - 1) {
        // 因为只能向右走，因此 该点所需生命为左侧点的生命-该点的权重 即该点为负数就将其加到最小hp上
        // 例如 [[-1,-2],[-3,-4]] -4点的生命为5 然后-3点的生命便是8
        dp[i][j] = Math.max(1, dp[i][j + 1] - dungeon[i][j]);
      } else if (j == l - 1) {
        //同理
        dp[i][j] = Math.max(1, dp[i + 1][j] - dungeon[i][j]);
      } else {
        // temp保存的是到当前点所需最小生命 选取下方和右侧较小的一个，并和当前的权重相减，若<0，取1，若>0，取较大值
        dp[i][j] = Math.max(
          1,
          Math.min(dp[i][j + 1], dp[i + 1][j]) - dungeon[i][j]
        );
      }
    }
  }
  return dp[0][0];
};
// @lc code=end
