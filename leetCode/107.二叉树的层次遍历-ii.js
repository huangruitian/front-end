/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
   let res = []
   let queue = [root]
   let len = 0
   let curNode = null
   if(!root) return res;
   while(queue.length){
       let item = []
       len = queue.length
       while(len){
          len--
          curNode = queue.shift()
          item.push(curNode.val)
          if(curNode.left) queue.push(curNode.left);
          if(curNode.right) queue.push(curNode.right);
       }
       if(item.length){
          res.unshift(item)
       }
   }
   return res
};
// @lc code=end

