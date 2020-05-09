/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) { 
  // 经典的 DFS 
  const res = []
  const DFS = (root, temp) => {
    if(!root) return;
    temp.push(root.val)
    if(!root.left && !root.right){
        res.push(temp.join('->'))
        return
    }
    if(root.left){
        DFS(root.left, [...temp])
    }
    if(root.right){
        DFS(root.right, [...temp])
    }
  }
  DFS(root, [])
  return res;
};
// @lc code=end

