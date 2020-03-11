/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let oldColor = image[sr][sc]
  let row = image.length
  let col = image[0].length
  let visited = Array(row).fill(0).map(d => Array(col).fill(false))
  function dfs(sr, sc) {
    if (image[sr][sc] === oldColor && !visited[sr][sc]) {
      image[sr][sc] = newColor
      visited[sr][sc] = true
      sr + 1 < image.length && dfs(sr + 1, sc)
      sr - 1 >= 0 && dfs(sr - 1, sc)
      sc + 1 < image[0].length && dfs(sr, sc + 1)
      sc - 1 >= 0 && dfs(sr, sc - 1)
    }
  }
  dfs(sr, sc)
  return image
};


// @lc code=end