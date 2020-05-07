/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    // 递归出口
    if (!root) return false;
    // process
    sum -= root.val;
    if (!root.left && !root.right && !sum) return true;
    // call self
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
    // rest state
};
// @lc code=end