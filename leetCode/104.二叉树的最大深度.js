/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 18:11:14
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 18:12:01
 */
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  //这种题递归很好做，小的深度0会先入栈出栈，大的深度会后出
  if(!root) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
};
// @lc code=end

