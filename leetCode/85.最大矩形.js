/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  // 利用84题的单调栈比较好解
  let r = matrix.length;
  if (!r || !matrix[0].length) return 0;
  let c = matrix[0].length;
  let maxArea = 0;
  // 处理成84题的柱状，划分成子问题，一层层解。
  let heights = new Array(c).fill(0);
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (matrix[i][j] == "1") {
        heights[j] += 1;
      } else {
        heights[j] = 0;
      }
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }
  return maxArea;
};

// 84. 题单调栈代码
function largestRectangleArea(heights) {
    let stack = [-1];
    let len = heights.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
      // heights[i] 当前高度小于栈顶高度，不能继续向外扩展了
      while (
        stack.length > 1 &&
        heights[stack[stack.length - 1]] >= heights[i]
      ) {
        // (i - stack[stack.length-1] - 1)，
        // 当前宽度是i，减掉栈的就等于栈到当前的了，从0开始的再减1
        max = Math.max(
          max,
          heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
        );
      }
      stack.push(i);
    }
    // 栈还有
    while (stack.length > 1) {
      max = Math.max(
        max,
        heights[stack.pop()] * (len - stack[stack.length - 1] - 1)
      );
    }
    return max
  };
// @lc code=end
