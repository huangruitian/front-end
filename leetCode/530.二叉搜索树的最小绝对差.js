/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    if(!root) return 0
    let left = root.left ? getMinimumDifference(root.left) : root
    let right = root.right ? getMinimumDifference(root.left) : root

    return Math.abs(left - right)
};
// @lc code=end

