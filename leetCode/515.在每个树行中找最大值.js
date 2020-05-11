/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function(root) {
  if(!root) return []
  let node = null
  let len = 0
  let res = []
  let queue = [root] 
  while(queue.length){
     len = queue.length
     let max = Number.MIN_SAFE_INTEGER
     while(len > 0){
         node = queue.shift()
         if(node.val > max) max = node.val;
         if(node.right) queue.push(node.right);
         if(node.left) queue.push(node.left);
         len --
     }
     res.push(max)
  } 
  return res
};
// @lc code=end

