/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-27 15:19:43
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-27 15:33:19
 */
/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return null;    //递归出口
    if(root.val > key){       //要删除的在左子树
      root.left = deleteNode(root.left, key)
    }else if(root.val < key){ //要删除的在右子树
      root.right = deleteNode(root.right, key)
    }else{                    //找到要删除的节点
      if(!root.left){         //左子树为空, 直接返回右节点做当前节点就行了
        return root.right
      }else if(!root.right){  //右子树为空, 直接返回右节点做当前节点就行了
        return root.left
      }else{                  //左右都不为空，找到右子树的最小，和当前的替换
        let min = findMin(root.right)
        root.val = min.val    //替换
        //右子树有个重复了，删了就行
        root.right = deleteNode(root.right, root.val) 
      }
    }
    return root  //因为是递归栈，要返回树根，所有要return root
};
//找一个最小的节点
function findMin(node){
  while(node.left){
    node = node.left
  }
  return node
}
// @lc code=end

