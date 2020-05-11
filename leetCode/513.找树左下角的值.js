/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  //1.BFS
  let node = null
  let queue = [root] 
  while(queue.length){
     let len = queue.length
     while(len > 0){
         node = queue.shift()
         if(node.right) queue.push(node.right);
         if(node.left) queue.push(node.left);
         len --
     }
  } 
  return node.val
};
// @lc code=end

