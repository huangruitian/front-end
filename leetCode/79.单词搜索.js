/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-29 09:03:26
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-29 18:41:21
 */
/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let row = board.length
  let col = board[0].length
  let visited = Array(row).fill().map(d => d = Array(col).fill(false))
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0] && backtrack(i, j, 0)) {
        return true
      }
    }
  }

  function backtrack(i, j, idx) {
    if (idx === word.length) return true;
    if (i >= row || i < 0 || j >= col || j < 0 || board[i][j] !== word[idx] || visited[i][j]) {
      return false
    }
    visited[i][j] = true
    idx++;
    if (backtrack(i + 1, j, idx) || backtrack(i - 1, j, idx) || backtrack(i, j + 1, idx) || backtrack(i, j - 1, idx)) {
      return true
    }
    visited[i][j] = false
    return false
  }
  return false
};



// @lc code=end