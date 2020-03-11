/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length || !matrix[0].length) return false;
    let row = matrix.length
    let col = matrix[0].length
    let left = 0
    let right = row * col - 1
    let mid, i, j
    while(left <= right){
       mid = (left + right) >>> 1;
       i = parseInt(mid / col)
       j = mid % col
       if(matrix[i][j] === target){
           return true
       }else if(matrix[i][j] < target){
           left = mid + 1
       }else{
           right = mid - 1 
       }
    }
    return false
};
// @lc code=end

