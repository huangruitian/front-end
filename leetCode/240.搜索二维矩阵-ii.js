/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // let row = matrix.length
    // let col = matrix[0].length
    // let left = 0
    // let right = row * col - 1
    // let mid, i, j;
    // while (left <= right) {
    //     mid = (left + right) >> 1
    //     i = parseInt(mid / col)
    //     j = mid % col
    //     mid = matrix[i][j]
    //     if(mid === target){
    //         return true
    //     }else if(mid < target){
    //         left = mid + 1
    //     }else{
    //         right = mid - 1
    //     }
    // }
    // return false
    // 上面二分法会超时，用这个双指针法
    let row = matrix.length
    if(!row) return false
    let col = matrix[0].length
    let left = col - 1
    let right = 0
    while(left >= 0 && right < row){
      if(matrix[right][left] === target){
         return true
      }else if(matrix[right][left] < target){
         right++
      }else{
         left--
      }
    }
    return false
};
// @lc code=end