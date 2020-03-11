/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */

var isSymmetric = function (root) {
  //1.迭代BFS，同时检验两个树
  let q = [root, root];
  while (q.length) {
    let t1 = q.shift();
    let t2 = q.shift();
    if (t1 == null && t2 == null) continue;
    if (t1 == null || t2 == null) return false;
    if (t1.val != t2.val) return false;
    q.push(t1.left, t2.right, t1.right, t2.left);
  }
  return true;
};

//递归写法，再生成一棵树
function isMirror(root, root2) {
  if (!root && !root2) return true
  if (!root || !root2) return false
  return (root.val == root2.val) &&
    isMirror(root.left, root2.right) &&
    isMirror(root.right, root2.left)
}

// @lc code=end