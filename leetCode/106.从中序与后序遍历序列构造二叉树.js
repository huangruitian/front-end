/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-27 10:44:09
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-27 10:44:23
 */
/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if(!inorder.length || !postorder.length){
     if(inorder.length){
         return new TreeNode(inorder[0]) 
     }
     if(postorder.length){
         return new TreeNode(postorder[0]) 
     }
     return null
  }else{
     let node = postorder.pop() //根
     let idx = inorder.indexOf(node) //根在中序遍历的位置
     let root = new TreeNode(node)
     let new_inorder = inorder.slice(0, idx)
     root.left = buildTree(new_inorder, postorder.slice(0, new_inorder.length))
     root.right = buildTree(inorder.slice(idx + 1), postorder.slice(new_inorder.length))
     return root  
  }
};
// @lc code=end

