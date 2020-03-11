/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-18 14:45:28
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-18 14:54:57
 */
/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 先序遍历构造二叉树
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  // 给定一个先序遍历的二叉搜索树（其实就相当于给中序了）
  let inorder = [].concat(preorder)
  return buildTree(preorder, inorder.sort((a, b) => a - b))
};
function buildTree(preorder, inorder) {
  if (!inorder.length || !preorder.length) {
    if (inorder.length) {
      return new TreeNode(inorder[0])
    }
    if (preorder.length) {
      return new TreeNode(preorder[0])
    }
    return null
  } else {
    let node = preorder.shift() //根
    let idx = inorder.indexOf(node) //根在中序遍历的位置
    let root = new TreeNode(node) //新根
    let left_inorder = inorder.slice(0, idx)
    let right_inorder = inorder.slice(idx + 1)

    let left_pre = preorder.splice(0, left_inorder.length)
    let right_pre = preorder

    root.left = buildTree(left_pre, left_inorder)
    root.right = buildTree(right_pre, right_inorder) //这有问题
    return root
  }
};
// @lc code=end