/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let lie = new Set();
  let pie = new Set();
  let na = new Set();
  let res = [];
  function backtrack(row, temp = []) {
    if (row == n) {
      res.push(temp.map((col) => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1)));
      return
    } else {
      for (let col = 0; col < n; col++) {
        if (lie.has(col) || pie.has(row + col) || na.has(row - col)) {
          continue;
        }
        lie.add(col);
        pie.add(row + col);
        na.add(row - col);
        temp.push(col);
        // 进入下一行
        backtrack(row + 1, temp);
        temp.pop();
        lie.delete(col);
        pie.delete(row + col);
        na.delete(row - col);
      }
    }
  }
  backtrack(0, []);
  return res;
};

// @lc code=end
