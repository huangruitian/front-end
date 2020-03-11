/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 15:27:05
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 15:28:45
 */
/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows == 0) return []
  let res = [
               [1],
              [1,1],
            ]
  if(numRows == 1){
      res.pop()
      return res
  }
  if(numRows == 2){
      return res
  }
  for(let i = 3; i <= numRows; i++){
      let temp = Array(i).fill(1)
      let last = res[res.length - 1]
      for(let j = 1; j < temp.length - 1; j++){
          temp[j] = last[j] + last[j - 1]
      }
      res.push(temp)
  }
  return res
};
// @lc code=end

