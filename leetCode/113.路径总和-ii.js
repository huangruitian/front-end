/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let res = [];
  // 1.base case
  if (!root) return res;
  // 2.process
  // 3.call self
  DFS(root, [], sum);
  return res;
  // 4. rest state, 这题也没有
  function DFS(root, temp, sum) {
    // 1.base case
    // 2.process
    sum -= root.val;
    temp.push(root.val);
    if (!root.left && !root.right && !sum) {
      res.push(temp);
      return;
    }
    // 3.call self
    if (root.left) {
      DFS(root.left, [...temp], sum);
    }
    if (root.right) {
      DFS(root.right, [...temp], sum);
    }
  }
};

// @lc code=end
