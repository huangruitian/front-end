/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
   if(!root) return []
   //BFS 
   const queue = [root]
   const res = []
   while(queue.length){
     let len = queue.length
     while(len > 0){
        let node = queue.shift()
        if(len === 1){
            res.push(node.val);
        }
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
        len--
     }
   }
   return res;
};
// @lc code=end

