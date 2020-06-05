/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    //1.暴力求解，heights[i] = heights[i] * (left_i - right_i - 1)
    //计算 heights[i] 的高度其实就是找到左边届和右边界。大于等于不满足边界。
    // let max = 0
    // let h = 0
    // for (let i = 0, len = heights.length; i < len; i++) {
    //     h = heights[i]
    //     let left = i
    //     let right = i
    //     while (left >= 0 && heights[i] <= heights[left]) {
    //         left--
    //     }
    //     while (right < len && heights[i] <= heights[right]) {
    //         right++
    //     }
    //     max = Math.max(h * (right - left - 1), max)
    // }
    // O(n^2) 复杂度过高

    // 单调栈，非常适合处理中间高两边低的情况；
    // 用一个单调递增的栈，因为是单调递增，所以对于每个 heights[i]，左边界就是自己
    // 当遇到一个大于等于栈顶元素的时候，说明还可以继续扩张面积；
    // 当遇到比栈顶元素小的，说明不能继续扩张了；把栈顶元素弹出继续保持单调递增；
    // 最后如果栈内还有元素，陆续弹出计算最大面积；
    // 因为每个元素只有一次入栈出栈的机会，所以时间空间复杂度都是O（n）
    
    let n = heights.length
    let stack = []
    let res = 0
    for(let i = 0; i < n; i++){
      while(stack.length && stack[stack.length - 1] < heights[i]){
        let current = stack.pop()
        res = Math.max(res, heights[current] * (i - current + 1))
      }  
      stack.push(i)
    }
    while(stack.length){
        let current = stack.pop()
        res = Math.max(res, heights[current] * (n - current + 1))
    }
    return res;
};
// @lc code=end