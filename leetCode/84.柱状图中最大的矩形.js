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

    //2. 重复找了，记忆化搜索DP
    //2.1 开辟 h[i][0] = left, h[i][1] = right
    // let len = heights.length
    // let left_i = Array(len)
    // let right_i = Array(len)
    // let max = 0
    // left_i[0] = -1
    // right_i[len - 1] = len
    // for (let i = 1; i < len; i++) {
    //     let tmp = i - 1;
    //     // 大了一直往前找，找边界
    //     while (tmp >= 0 && heights[tmp] >= heights[i]) tmp = left_i[tmp];
    //     left_i[i] = tmp;
    // }
    // for (let i = len - 2; i >= 0; i--) {
    //     let tmp = i + 1;
    //     // 大了一直往前找，找边界
    //     while (tmp < len && heights[tmp] >= heights[i]) tmp = right_i[tmp];
    //     right_i[i] = tmp;
    // }
    // for (let i = 0; i < len; i++) {
    //     max = Math.max(max, (right_i[i] - left_i[i] - 1) * heights[i]);
    // }
    // return max

    // 3.单调栈，利用单调栈快速得到左右边界
    let stack = [];
    stack.push(-1);
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        // 栈顶元素不是第一个元素 -1 且数组呈下降关系时，什么时候结束呢？
        // 显然是当栈顶元素为 -1 或者 heights[i] ≥ heights[stack.peek()] 跳出循环直接压栈
        while (stack[stack.length - 1] != -1 && heights[i] < heights[stack[stack.length - 1]]) {
            // 将栈中的序号弹出，计算最大面积
            maxArea = Math.max(heights[stack.pop()] * (i - stack[stack.length - 1] - 1), maxArea);
        }
        stack.push(i);
    }
    while (stack[stack.length - 1] != -1) {
        maxArea = Math.max(heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1), maxArea);
    }
    return maxArea;
};
// @lc code=end