/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    //利用中序遍历是从小到大的特点
    let stack = []
    let pre = null
    let cur = root
    //模拟栈，左到底再出来  
    while(stack.length || cur){
       while(cur){
          stack.push(cur)
          cur = cur.left
       }
       cur = stack.pop()
       if(pre && pre.val >= cur.val){
          return false
       }
       pre = cur
       cur = cur.right
    }
    return true
};
// @lc code=end

