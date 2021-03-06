/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
   if(!root) return 0;
   let val = 0
   // 满足是个单独的左叶子就行了；    
   if(root.left && !root.left.left && !root.left.right){
       val = root.left.val
   }
   return val + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};
// @lc code=end
