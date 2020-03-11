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
    while(root || stack.length){
      while(root){
         stack.push(root)
         root = root.left 
      }
      root = stack.pop()
      //前一个存在，前一个大于等于当前的。就不是BST数
      if(pre && pre.val >= root.val){
         return false
      }
      //当前的等于前一个
      pre = root
      root = root.right //右边就是第二个！！！
    }
    return true
};
// @lc code=end

