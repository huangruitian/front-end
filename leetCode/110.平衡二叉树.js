/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true;
    return Math.abs(getHeight(root.left) - getHeight(root.right)) < 2 &&
        isBalanced(root.left) && isBalanced(root.right);
};

function getHeight(root) {
    if (!root) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}
// @lc code=end