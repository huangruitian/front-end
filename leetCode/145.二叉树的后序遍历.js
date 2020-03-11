/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    //前序遍历的倒插
    let res = []
    if(!root) return res;
    let stack = [root]
    while(stack.length){
      let cur = stack.pop() //根
      res.unshift(cur.val)  //后续遍历根在最后
      //因为利用栈，同时向前插，所以直接左右就行了。
      if(cur.left) stack.push(cur.left)     //左
      if(cur.right) stack.push(cur.right)   //右
    }
    return res
};
// @lc code=end

