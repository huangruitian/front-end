/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    let minDeep = Number.MAX_VALUE;
    if (root.left) {
        minDeep = Math.min(minDepth(root.left), minDeep)
    }
    if (root.right) {
        minDeep = Math.min(minDepth(root.right), minDeep)
    }
    return minDeep + 1
};
// @lc code=end