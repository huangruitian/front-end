/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-10 18:08:09
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-10 18:15:48
 */
/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function (root) {
  //  BFS
  //  1.根节的值第一小 first
  //  2.层次遍历，找到第二小second
  //  3.当一层遍历完时，两个不一样就可以完事了
  if (root == null || (root.left == null && root.right == null)) {
    return -1;
  }
  let left = root.left.val;
  let right = root.right.val;
  if (left == root.val) {
    left = findSecondMinimumValue(root.left);
  }
  if (right == root.val) {
    right = findSecondMinimumValue(root.right);
  }
  if (left != -1 && right != -1) {
    return Math.min(left, right);
  }
  if (left != -1) {
    return left;
  }
  return right;
};
// @lc code=end