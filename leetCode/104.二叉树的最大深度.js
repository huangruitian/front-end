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
  //这种题递归很好做
  // if(!root) return 0;
  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  // 空间 O（2^h） 

  // 非递归写法
  // 1.BFS 咯
  // 时间复杂度O（n）, 空间 O（n）
};
// @lc code=end

