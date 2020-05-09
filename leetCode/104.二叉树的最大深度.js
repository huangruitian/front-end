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
var maxDepth = function (root) {
  //1.base case；
  // 既然是要求二叉树的最大深度，那么叶子到达叶子的时候，也就是null的时候深度是 0
  if(!root) return 0;
  //2.process；
  //3.call self level；
  // 二叉树有左子树右子树，我们只要把左子树和右子树的深度求出来，取最大值就可以了
  //左子树深度，不要人肉递归！
  let leftDeep = maxDepth(root.left) 
  //右子树深度，不要人肉递归！
  let rightDeep = maxDepth(root.right) 
  //直接取左子树和右子树的最大深度就可以了
  let max = Math.max(leftDeep, rightDeep) + 1 
  //4.rest state；
  //这题不需要清除什么公用的变量
  // 返回结果
  return max
};
// @lc code=end
