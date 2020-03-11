/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    // 简单的递归版本
    // let res = []
    // let dfs = (root, res) => {
    //     if (!root) return
    //     res.push(root.val)
    //     dfs(root.left, res)
    //     dfs(root.right, res)
    // }
    // dfs(root, res)
    // return res

    // 非递归版本，仔细观察递归版本。根左右
    // 1.根据递归版本，从根开始，一直左子树入栈，访问
    // 2.然后出栈，看当前的节点有没有右子树，有的话继续递归第1步
    // 3.直至栈为空
    // let stack = []
    // let res = []
    // let cur = root
    // while(stack.length || cur){
    //     while(cur){ //直接访问左子树会报错！！！
    //         stack.push(cur)   //根
    //         res.push(cur.val) 
    //         cur = cur.left    //左
    //     }
    //     cur = stack.pop()
    //     cur = cur.right       //右
    // }
    // return res
    
    //另外一版，左右
    let res = []
    if(!root) return res;
    let stack = [root]
    while(stack.length){
      let cur = stack.pop() //根
      res.push(cur.val)
      //因为是栈，先进后出，所有其实就相当于根，左，右
      if(cur.right) stack.push(cur.right) //右
      if(cur.left) stack.push(cur.left)   //左
    }
    return res
};
// @lc code=end

