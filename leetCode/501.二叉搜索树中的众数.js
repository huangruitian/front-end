/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function(root) {
  //遍历加 map 咯，可以中序加速；O（n）
  const map = new Map()
  let res = []
  const DFS = (node, map) => {
      if(!node) return;
      map.set(node.val, (map.get(node.val) || 0) + 1)
      DFS(node.left, map)
      DFS(node.right, map)
  }
  DFS(root, map)
  let temp = [...map]
  temp.sort((a, b) => b[1] - a[1])
  
  for (let i = 0; i < temp.length; i++) {
      const [key, val] = temp[i]
      if(!i || val == temp[i - 1][1]){
        res.push(key)
      }else{
        break;
      }
  }
  return res
};
// @lc code=end

