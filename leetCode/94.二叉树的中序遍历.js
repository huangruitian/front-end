/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
    // 简单的递归版本
    // let res = []
    // let dfs = (root, res) => {
    //     if (!root) return
    //     dfs(root.left, res)
    //     res.push(root.val)
    //     dfs(root.right, res)
    // }
    // dfs(root, res)
    // return res

    // 非递归版本，仔细观察递归版本。左根右
    // 1.根据递归版本，从根开始，一直左子树入栈
    // 2.然后出栈访问，看当前的节点有没有右子树，有的话继续递归第1步
    // 3.直至栈为空
    // let stack = []
    // let res = []
    // let cur = root
    // while(stack.length || cur){
    //     while(cur){ //直接访问左子树会报错！！！
    //         stack.push(cur)
    //         cur = cur.left
    //     }
    //     cur = stack.pop()
    //     res.push(cur.val)
    //     cur = cur.right
    // }
    // return res

    // 万能模板法
    // let [node, color] = [root, 0]
    let stack = [[root, 0]]
    let res = []
    while(stack.length){
      let [node, color] = stack.pop()
      if(!node) continue;
      //节点没有访问过
      if(!color){
        stack.push([node.right, 0])
        stack.push([node, 1])
        stack.push([node.left, 0])
      }else{
        res.push(node.val)
      }
    }
    return res
};
// @lc code=end