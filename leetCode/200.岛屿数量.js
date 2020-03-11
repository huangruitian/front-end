/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = 0
    let row = grid.length
    if(!row) return res;
    let col = grid[0].length
    if(!col) return res;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == '1') {
                res++
                bfs(i, j, grid)
            }
        }
    }
    return res;
};
//深度优先搜索
function dfs(i, j, g) {
    if(g[i][j] == '0') return
    let row = g.length
    let col = g[0].length
    g[i][j] = '0'
    if (i - 1 >= 0) bfs(i - 1, j, g);
    if (i + 1 < row) bfs(i + 1, j, g);
    if (j - 1 >= 0) bfs(i, j - 1, g);
    if (j + 1 < col) bfs(i, j + 1, g);
}

//广度优先搜索
function bfs(x, y, g) {
    let row = g.length
    let col = g[0].length
    let queue = []
    queue.push([x, y])
    let cur = null
    let i = 0
    let j = 0
    while(queue.length){
      cur = queue.shift()
      i = cur[0]
      j = cur[1]
      if(0 <= i && i < row && 0 <= j && j < col && g[i][j] == '1'){
         g[i][j] = '0'
         queue.push([i - 1, j])
         queue.push([i + 1, j])
         queue.push([i, j - 1])
         queue.push([i, j + 1])
      }
    }
}
// @lc code=end