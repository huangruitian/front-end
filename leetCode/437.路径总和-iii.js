/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  //1.BFS 配合 DFS
  //2.BFS 配合 BFS 
  //2.DFS 配合 DFS  
  let count = 0;
  BFS(root);
  return count;

  function BFS(root){
    const queue = [root]
    while(queue.length){
      let len = queue.length;
      while(len > 0){
        len--;
        let node = queue.shift()
        if(node){
            queue.push(node.left);
            queue.push(node.right);
            DFS(node, node.val);
        }
      }
    }
 }
 function DFS(node, curr){
    if (curr === sum) count++;

    if (node.left) {
        DFS(node.left, node.left.val + curr);
    }
    if (node.right) {
        DFS(node.right, node.right.val + curr);
    }
 }
};

// @lc code=end

