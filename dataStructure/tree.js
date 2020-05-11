// /*
//  * @Description:
//  * @Autor: hrt
//  * @Date: 2019-08-22 15:37:56
//  * @LastEditors: hrt
//  * @LastEditTime: 2019-11-05 15:36:25
//  */

// // 完全二叉树的一些公式

// // function Node(data, left, right) {
// //   this.data = data
// //   this.left = left
// //   this.right = right
// // }

// // //打印节点
// // Node.prototype.show = function () {
// //   console.log(this.data);
// // }

// // //二叉树
// // function Tree() {
// //   this.root = null;
// // }

// // //遍历树，如果值比当前节点值小，放左边，大放右边
// // Tree.prototype.insert = function (data) {
// //   let node = new Node(data)
// //   if (!this.root) { //树为空直接插入
// //     this.root = node
// //     return node
// //   }
// //   let current = this.root //当前节点
// //   let parent = null //父节点
// //   while (current) {
// //     parent = current //先保存一波父节点，当前节点
// //     //我下去看看比当前的节点大还是小
// //     if (current.data < data) { //大于放右边哦
// //       current = current.right //先下右边看看吧
// //       if (!current) { //到头了，右边没有了
// //         parent.right = node //到头了放进去
// //       }
// //     } else { //小的放左边哦
// //       current = current.left //先下左边看看吧
// //       if (!current) { //到头了嘛？没到继续
// //         parent.left = node //到头了放进去
// //       }
// //     }
// //   }
// //   return node
// // }

// // //得到二叉搜索树的最小值, 构建树的时候是左小右大，所有最小的在树的左末端
// // Tree.prototype.getMin = function () {
// //   if (!this.root) {
// //     return false
// //   }
// //   var current = this.root //当前节点
// //   while (current) {
// //     if (current.left) { //存在左分支
// //       current = current.left
// //     } else {
// //       // console.log(current.data)
// //       return current.data //不存在到头了，最小就是自己的data
// //     }
// //   }
// // }

// // //得到二叉搜索树的最大值
// // Tree.prototype.getMax = function () {
// //   if (!this.root) {
// //     return false
// //   }
// //   var current = this.root //当前节点
// //   while (current) {
// //     if (current.right) { //存在左分支
// //       current = current.right
// //     } else {
// //       // console.log(current.data)
// //       return current.data //不存在到头了，最小就是自己的data
// //     }
// //   }
// // }

// // //得到某个节点(树查找，利用二分查找的思想)
// // Tree.prototype.getNode = function (node, data) {
// //   if (!node) {
// //     return null
// //   }
// //   if (node.data === data) {
// //     return node
// //   } else if (node.data > data) {
// //     return this.getNode(node.left, data)
// //   } else {
// //     return this.getNode(node.right, data)
// //   }
// // }

// // //非递归版怎么实现？
// // Tree.prototype.getNode1 = function (data) {
// //   if (!this.root || !data) {
// //     return null
// //   }
// //   let current = this.root
// //   while (current) {
// //     if (current.data === data) {
// //       return current
// //     } else if (current.data > data) {
// //       current = current.left
// //     } else {
// //       current = current.right
// //     }
// //   }
// //   return null //没找到
// // }

// // //判断二叉树是不是空树
// // Tree.prototype.isEmpty = function () {
// //   if (!this.root) {
// //     return true
// //   }
// //   return false
// // }

// // //二叉树的深度(递归版)
// // Tree.prototype.getDeep = function (node, deep = 0) {
// //   if (!node) {
// //     return deep
// //   }
// //   deep++
// //   let lDeep = this.getDeep(node.left, deep)
// //   let rDeep = this.getDeep(node.right, deep)
// //   return Math.max(lDeep, rDeep)
// // }

// // //二叉树的深度, 非递归版，用BFS
// // Tree.prototype.getDeep1 = function () {
// //   if (!this.root) {
// //     return 0
// //   }
// //   let res = []
// //   //借用一个队列
// //   let queue = []
// //   let map = new Map()
// //   let parent = {}
// //   let current = this.root
// //   // 第一个节点
// //   queue.push(current)
// //   parent[current.data] = null
// //   while (queue.length) {
// //     let node = queue.shift()
// //     let nodeList = []
// //     node.left && nodeList.push(node.left)
// //     node.right && nodeList.push(node.right)
// //     while (nodeList.length) {
// //       let item = nodeList.shift()
// //       if (!map.has(item.data)) {
// //         map.set(item.data, item)
// //         queue.push(item)
// //         parent[item.data] = node.data
// //       }
// //     }
// //     res.push(node)
// //   }
// //   //最后一个节点肯定是在最深的一层, 那求最后一个节点到根的长度就是树的最大深度了
// //   let s = res[res.length - 1].data
// //   let count = 1
// //   while (parent[s] != null) {
// //     count++
// //     s = parent[s]
// //   }
// //   return count
// // }

// // //二叉树前序遍历（根左右）
// // Tree.prototype.preOrder = function (node) {
// //   if (!node) { //递归出口
// //     return
// //   }
// //   node.show() //根
// //   this.preOrder(node.left) //左
// //   this.preOrder(node.right) //右
// // }

// // // 非递归实现
// // // 取跟节点为目标节点，开始遍历
// // // 1.访问目标节点
// // // 2.左孩子入栈 -> 直至左孩子为空的节点
// // // 3.节点出栈，以右孩子为目标节点，再依次执行1、2、3
// // Tree.prototype.preOrder1 = function (node) {
// //   if (!node) {
// //     return
// //   }
// //   let stack = [] //利用栈
// //   let result = []
// //   let current = node
// //   while (current || stack.length > 0) {
// //     while (current) {
// //       result.push(current.data) //访问根节点
// //       stack.push(current)
// //       current = current.left
// //     }
// //     current = stack.pop()
// //     current = current.right
// //   }
// //   console.log(result)
// //   return result
// // }

// // //二叉树中序遍历（左根右）
// // Tree.prototype.middleOrder = function (node) {
// //   if (!node) {
// //     return
// //   }
// //   this.middleOrder(node.left)
// //   node.show()
// //   this.middleOrder(node.right)
// // }
// // // 非递归实现
// // // 取跟节点为目标节点，开始遍历
// // // 1.左孩子入栈 -> 直至左孩子为空的节点
// // // 2.节点出栈 -> 访问该节点
// // // 3.以右孩子为目标节点，再依次执行1、2、3
// // Tree.prototype.middleOrder1 = function (node) {
// //   if (!node) {
// //     return
// //   }
// //   let stack = [] //利用栈
// //   let result = []
// //   let current = node
// //   while (current || stack.length > 0) {
// //     while (current) {
// //       stack.push(current)
// //       current = current.left
// //     }
// //     current = stack.pop()
// //     result.push(current.data)
// //     current = current.right
// //   }
// //   console.log(result)
// //   return result
// // }

// // //二叉树后序遍历（左右根）
// // Tree.prototype.laterOrder = function (node) {
// //   if (!node) {
// //     return
// //   }
// //   this.laterOrder(node.left)
// //   this.laterOrder(node.right)
// //   node.show()
// // }
// // // 非递归实现

// // // 取跟节点为目标节点，开始遍历
// // // 1.左孩子入栈 -> 直至左孩子为空的节点
// // // 2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
// // // 3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3
// // Tree.prototype.laterOrder1 = function (node) {
// //   if (!node) {
// //     return
// //   }
// //   let stack = [] //利用栈
// //   let result = []
// //   let current = node
// //   let last = null; // 标记上一个访问的节点
// //   while (current || stack.length > 0) {
// //     while (current) {
// //       stack.push(current)
// //       current = current.left
// //     }
// //     current = stack[stack.length - 1];
// //     if (!current.right || current.right == last) {
// //       current = stack.pop();
// //       result.push(current.data);
// //       last = current;
// //       current = null; // 继续弹栈
// //     } else {
// //       current = current.right;
// //     }
// //   }
// //   console.log(result)
// //   return result
// // }

// // var t = new Tree();
// // t.insert(5);
// // t.insert(1);
// // t.insert(4);
// // t.insert(2);
// // t.insert(6);
// // t.insert(7);
// // t.insert(3);
// // t.insert(8);
// // t.insert(-1);
// // console.log(t);
// // // console.log(t.getMin(), t.getMax())
// // // console.log(t.getNode(4));
// // // console.log(t.getDeep(t.root));
// // // console.log(t.getDeep1(t.root));

// // // console.log('========================');
// // // t.preOrder1(t.root) //5,1,-1,4,2,3,6,7,8
// // // console.log('========================');
// // // t.middleOrder1(t.root) //-1,1,2,3,4,5,6,7,8
// // // console.log('========================');
// // // t.laterOrder1(t.root) //-1,3,2,4,1,8,7,6,5

// // // 思考，到底二叉树的这三种遍历是怎么遍历的呢？
// // // 可能你会有点小疑惑，下面我来解开它
// // /*
// //                             5（root）
// //       =========================================================
// //                 1                        6
// //       =========================================================
// //            -1       4                n       7
// //       =========================================================
// //           n   n   2   n                   n      8
// //       =========================================================
// //                 n   3                         n      n
// //       =========================================================
// //                   n   n
// //       =========================================================
// // */
// // /*
// // 占坑法：先整体把一棵树看成左根右三个节点（ABC）占坑，再递归左子树和右子树就可以了。
// // 前遍历（根左右）：5 1 6 -> 5 (1 -1 4 2 3) (6 7 8) -> 5 1 -1 4 2 3 6 7 8 //占坑分解
// // 中遍历（左根右）：1 5 6 -> (-1 1 2 3 4) 5 (6 7 8) -> -1 1 2 3 4 5 6 7 8 //同样是占坑分解
// // 后遍历（左右根）：1 6 5 -> (-1 3 2 4 1) (8 7 6) 5 -> -1 3 2 4 1 8 7 6 5 //同样是占坑分解
// // */

// // // 下面做一些题目巩固二叉树的学习
// // // 1.重建二叉树：
// // // 前序遍历：跟节点 + 左子树前序遍历 + 右子树前序遍历
// // // 中序遍历：左子树中序遍历 + 跟节点 + 右字数中序遍历
// // // 后序遍历：左子树后序遍历 + 右子树后序遍历 + 跟节点
// // // 根据上面的规律：

// // // 前序遍历找到根结点root
// // // 找到root在中序遍历的位置 -> 左子树的长度和右子树的长度
// // // 截取左子树的中序遍历、右子树的中序遍历
// // // 截取左子树的前序遍历、右子树的前序遍历
// // // 递归重建二叉树

// // function reConstructBinaryTree(pre, vin) {
// //   //pre, 根左右
// //   //vin  左右根
// //   let root = pre[0];
// //   let index = vin.indexOf(root)
// //   const vinLeft = vin.slice(0, index);
// //   const vinRight = vin.slice(index + 1);
// //   const preLeft = pre.slice(1, index + 1);
// //   const preRight = pre.slice(index + 1);
// //   const node = new TreeNode(value);
// //   node.left = reConstructBinaryTree(preLeft, vinLeft);
// //   node.right = reConstructBinaryTree(preRight, vinRight);
// //   return node;
// // }
// // // 二叉树的右子树是二叉树左子树的镜像二叉树。
// // // 两个根结点相等
// // // 左子树的右节点和右子树的左节点相同。
// // // 右子树的左节点和左子树的右节点相同。
// // // 递归所有节点满足以上条件即二叉树对称。

// // function isSymmetrical(pRoot) {
// //   return isSymmetricalTree(pRoot, pRoot);
// // }
// // //左节点，右节点
// // function isSymmetricalTree(node1, node2) {
// //   //两个节点都不存在
// //   if (!node1 && !node2) {
// //     return true;
// //   }
// //   //存在一个都不是
// //   if (!node1 || !node2) {
// //     return false;
// //   }
// //   //两个根节点不相等
// //   if (node1.val != node2.val) {
// //     return false;
// //   }
// //   return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left);
// // }

// // // 操作给定的二叉树，将其变换为源二叉树的镜像。
// // // 思路：递归交换二叉树所有节点左右节点的位置。

// // function Mirror(root) {
// //   if (root) {
// //     const temp = root.right;
// //     root.right = root.left;
// //     root.left = temp;
// //     Mirror(root.right);
// //     Mirror(root.left);
// //   }
// // }

// // // 给定一棵二叉搜索树，请找出其中的第k小的结点。
// // // 例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4。
// // // 思路：二叉搜索树的中序遍历即排序后的节点，本题实际考察二叉树的遍历。

// // // 递归实现
// // function KthNode(pRoot, k) {
// //   const arr = [];
// //   loopThrough(pRoot, arr);
// //   if (k > 0 && k <= arr.length) {
// //     return arr[k - 1];
// //   }
// //   return null;
// // }

// // //左根右（中序遍历）
// // function loopThrough(pRoot, arr) {
// //   if (pRoot) {
// //     loopThrough(pRoot.left)
// //     arr.push(pRoot)
// //     loopThrough(pRoot.left)
// //   }
// // }
// // //非递归版
// // function KthNode(pRoot, k) {
// //   const arr = [];
// //   let current = pRoot
// //   let stack = []
// //   while (current || stack.length > 0) {
// //     while (current) {
// //       stack.push(current)
// //       current = current.left
// //     }
// //     current = stack.pop()
// //     arr.push(current)
// //     current = current.right
// //   }
// //   if (k > 0 && k <= arr.length) {
// //     return arr[k - 1];
// //   }
// //   return null;
// // }
// // //那其实排序还可以这样，构建一个二叉搜索树，然后再中序遍历

// // // 给定一个二叉树，找出其最大深度。
// // // 思路：深度优先遍历 + 分治
// // // 一棵二叉树的最大深度等于左子树深度和右子树最大深度的最大值 + 1
// // function TreeDepth(pRoot) {
// //   return !pRoot ? 0 : Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1
// // }

// // // 给定一个二叉树，找出其最小深度。
// // // 思路：深度优先 + 分治想
// // // 左右子树都不为空：左子树深度和右子树最小深度的最小值 + 1
// // // 左树为空：右子树最小深度的最小值 + 1
// // // 右树为空：左子树最小深度 + 1
// // var minDepth = function (root) {
// //   if (!root) {
// //     return 0;
// //   }
// //   if (!root.left) {
// //     return 1 + minDepth(root.right);
// //   }
// //   if (!root.right) {
// //     return 1 + minDepth(root.left);
// //   }
// //   return Math.min(minDepth(root.left), minDepth(root.right)) + 1
// // };

// // /**
// //  * Definition for a binary tree node.
// //  * function TreeNode(val) {
// //  *     this.val = val;
// //  *     this.left = this.right = null;
// //  * }
// //  */
// // /**
// //  * @param {TreeNode} root
// //  * @return {number}
// //  */
// // var countNodes = function (root) {
// //   if (!root) {
// //     return 0
// //   }
// //   let len = 0
// //   let l = root
// //   let r = root
// //   while (r.right) {
// //     len++
// //     r = r.right
// //     l = l.left
// //   }

// //   if (!l) {
// //     return Math.pow(2, len + 1) - 1
// //   }
// //   return 1 + countNodes(root.left) + countNodes(root.right)
// // };

// // // 二叉树的
// // var t = new Tree();
// // t.insert(5);
// // t.insert(1);
// // t.insert(4);
// // t.insert(2);
// // t.insert(6);
// // t.insert(7);
// // t.insert(3);
// // t.insert(8);
// // t.insert(-1);
// // console.log(t);

// // // leetCode 145.后序遍历为例子，模拟递归执行效果
// // var postorderTraversal = function (root) {
// //   //模拟递归的执行上下文, 存放各种临时变量
// //   class Context {
// //     constructor(node) {
// //       this.node = node
// //       this.setp = 0
// //     }
// //   }
// //   let res = [] //输出的遍历结果
// //   let stack = [] //递归的执行栈，递归本质就是栈
// //   let cur = null //当前节点
// //   stack.push(new Context(root)) //先把root根入栈
// //   while (stack.length) { //栈不为空就一直执行
// //     cur = stack[stack.length - 1] //执行栈中的第一个，试探，未出栈
// //     if (cur.node == null) { //是空的直接出栈
// //       stack.pop()
// //     } else if (cur.setp == 0) { //第一阶段，遍历左子树入栈
// //       cur.setp++
// //       stack.push(new Context(cur.node.left))
// //     } else if (cur.setp == 1) { //第二阶段，遍历右子树入栈
// //       cur.setp++
// //       stack.push(new Context(cur.node.right))
// //     } else { //第三阶段，既完成第一第二阶段之后，左右子树就已经被遍历了。
// //       res.push(cur.node.val) //加入结果
// //       stack.pop() //出栈
// //     }
// //   }
// //   return res;
// // };

// // /** 98 用中序遍历，中序遍历是递增的，所以我们可以中序遍历判断前一数是否小于后一个数.
// //  * Definition for a binary tree node.
// //  * function TreeNode(val) {
// //  *     this.val = val;
// //  *     this.left = this.right = null;
// //  * }
// //  */
// // /**
// //  * @param {TreeNode} root
// //  * @return {boolean}
// //  */
// // var isValidBST = function (root) {
// //   let stack = [];
// //   let p = root;
// //   let pre = null;
// //   while (p != null || stack.length) {
// //     while (p != null) {
// //       stack.push(p);
// //       p = p.left;
// //     }
// //     p = stack.pop();
// //     //前一个数大于当前的
// //     if (pre != null && pre.val >= p.val) return false;
// //     pre = p;
// //     p = p.right;
// //   }
// //   return true;
// // };

// // /**
// //  * Definition for a binary tree node.
// //  * function TreeNode(val) {
// //  *     this.val = val;
// //  *     this.left = this.right = null;
// //  * }
// //  */
// // /**
// //  * @param {TreeNode} root
// //  * @return {boolean}
// //  */
// // var isValidBST = function (root) {
// //   if (!root) {
// //     return true
// //   }
// //   let pre = null //前一个
// //   let cur = root //当前的
// //   let stack = []
// //   while (cur || stack.length) {
// //     while (cur) {
// //       stack.push(cur)
// //       cur = cur.left
// //     }
// //     cur = stack.pop() //2出栈
// //     //利用中序遍历，总是递增的， 1 2 3
// //     if (pre && pre.val >= cur.val) return false
// //     pre = cur //1
// //     cur = cur.right
// //   }
// //   return true
// // };

// // /** 99
// //  * Definition for a binary tree node.
// //  * function TreeNode(val) {
// //  *     this.val = val;
// //  *     this.left = this.right = null;
// //  * }
// //  */
// // /**
// //  * @param {TreeNode} root
// //  * @return {void} Do not return anything, modify root in-place instead.
// //  */
// // var recoverTree = function (root) {
// //   //[3,1,4,2] -> [2,1,4,3]
// //   let stack = []
// //   let cur = root
// //   let pre = null //保留前一个节点
// //   let first = null
// //   let second = null
// //   while (cur || stack.length) {
// //     while (cur) {
// //       stack.push(cur)
// //       cur = cur.left
// //     }
// //     cur = stack.pop()
// //     //第一个为空，前一个大于当前的，第一个就是前一个
// //     if (pre && first == null && pre.val > cur.val) first = pre;
// //     //第一个不为空，前一个大于当前的，第二个就是当前的
// //     if (first != null && pre.val > cur.val) second = cur;
// //     pre = cur
// //     cur = cur.right
// //   }
// //   // [first, second] = [second, first]
// //   let temp = first
// //   first = second
// //   second = temp
// // };

// // /** 105
// //  * Definition for a binary tree node.
// //  * function TreeNode(val) {
// //  *     this.val = val;
// //  *     this.left = this.right = null;
// //  * }
// //  */
// // /**
// //  * @param {number[]} preorder
// //  * @param {number[]} inorder
// //  * @return {TreeNode}
// //  */
// // // 前序遍历 preorder = [3,    9,20,15,7]
// // // 中序遍历 inorder = [9,   3,  15,20,7]
// // var buildTree = function (preOrder, inOrder) {
// //   if (inOrder.length == 0 && preOrder.length == 0) {
// //     return null;
// //   };
// //   //先序遍历: [根节点, 左子树,  右子树];
// //   //中序遍历: [左子树, 根节点,  右子树];
// //   let root = {};
// //   root.val = preOrder[0];
// //   let rootIdxInOrder = inOrder.indexOf(root.val);
// //   //左子树的中序遍历
// //   let leftTreeInOrder = inOrder.slice(0, rootIdxInOrder);
// //   //左子树的先序遍历
// //   let leftTreePreOrder = preOrder.slice(1, leftTreeInOrder.length + 1);
// //   //递归的寻找赋值
// //   root.left = buildTree(leftTreePreOrder, leftTreeInOrder);
// //   //右子树的中序遍历
// //   let rightTreeInOrder = inOrder.slice(rootIdxInOrder + 1);
// //   //右子树的先序遍历    我们可以知道右子树在 先序, 中序的位置是一样的
// //   let rightTreePreOrder = preOrder.slice(rootIdxInOrder + 1);
// //   root.right = buildTree(rightTreePreOrder, rightTreeInOrder);
// //   return root;
// // };

// // /** 106
// //  * Definition for a binary tree node.
// //  * function TreeNode(val) {
// //  *     this.val = val;
// //  *     this.left = this.right = null;
// //  * }
// //  */
// // /**
// //  * @param {number[]} inorder
// //  * @param {number[]} postorder
// //  * @return {TreeNode}
// //  */
// // var buildTree = function (inorder, postorder) {
// //   // 中序遍历 inorder = [9,  3  ,15,20,7]
// //   // 后序遍历 postorder = [9,15,7,20,   3]
// //   if (inorder.length == 0 && postorder.length == 0) {
// //     return null;
// //   };

// //   let root = {};
// //   root.val = postorder[postorder.length - 1];
// //   let rootIdxInOrder = inorder.indexOf(root.val);

// //   //左子树的中序遍历
// //   let leftTreeInOrder = inorder.slice(0, rootIdxInOrder);
// //   //左子树的后序遍历
// //   let leftTreePreOrder = postorder.slice(0, rootIdxInOrder);
// //   //递归的寻找赋值
// //   root.left = buildTree(leftTreePreOrder, leftTreeInOrder);

// //   //右子树的中序遍历
// //   let rightTreeInOrder = inorder.slice(rootIdxInOrder + 1);
// //   //右子树的后序遍历    我们可以知道右子树在 先序, 中序的位置是一样的
// //   let rightTreePreOrder = preOrder.slice(1, postorder.length);

// //   root.right = buildTree(rightTreePreOrder, rightTreeInOrder);
// //   return root;
// // };

// // /** 107
// //  * Definition for a binary tree node.
// //  * function TreeNode(val) {
// //  *     this.val = val;
// //  *     this.left = this.right = null;
// //  * }
// //  */
// // /**
// //  * @param {TreeNode} root
// //  * @return {number[][]}
// //  */
// // var levelOrderBottom = function (root) {
// //   let res = []
// //   let queue = []
// //   queue.push(root)
// //   while (queue.length) {
// //     //怎么得到一行
// //     let r = []
// //     let len = queue.length
// //     while (len > 0) {
// //       let d = queue.shift()
// //       r.push(d.val)
// //       if (d.left) queue.push(d.left)
// //       if (d.right) queue.push(d.right)
// //       len--
// //     }
// //     res.push(r)
// //   }
// //   return res
// // };

// // /** 113
// //  * Definition for a binary tree node.
// //  * function TreeNode(val) {
// //  *     this.val = val;
// //  *     this.left = this.right = null;
// //  * }
// //  */
// // /**
// //  * @param {TreeNode} root
// //  * @param {number} sum
// //  * @return {number[][]}
// //  */
// // var pathSum = function (root, sum) {
// //   //dfs 深度优先
// //   let res = []
// //   let dfs = (res, node, tSum, [...arr]) => {
// //     if (!node) return;
// //     tSum -= node.val;
// //     arr.push(node.val);
// //     if (!node.left && !node.right && tSum === 0) {
// //       res.push(arr);
// //       // return
// //     }
// //     //不能直接传数组，引用
// //     dfs(res, node.left, tSum, arr);
// //     dfs(res, node.right, tSum, arr);
// //   }
// //   dfs(res, root, sum, [])
// //   return res
// // };

// // /** 114 后续遍历
// //  * Definition for a binary tree node.
// //  * function TreeNode(val) {
// //  *     this.val = val;
// //  *     this.left = this.right = null;
// //  * }
// //  */
// // /**
// //  * @param {TreeNode} root
// //  * @return {void} Do not return anything, modify root in-place instead.
// //  */
// // var flatten = function (root) {
// //   let stack = [] //利用栈
// //   let current = root
// //   let res = []
// //   while (current || stack.length > 0) {
// //     while (current) {
// //       stack.push(current)
// //       current = current.left
// //     }
// //     current = stack.pop()
// //     res.push(current)
// //     current = current.right
// //   }
// //   console.log(res)
// //   // return result
// //   root = res.shift()
// //   while (res.length) {
// //     root.right = res.shift()
// //   }
// // };

// // 复习
// //节点
// function Node(val, left, right) {
//   this.val = val;
//   this.left = left;
//   this.right = right;
// }

// //打印节点
// Node.prototype.show = function () {
//   console.log(this.val);
// };

// //二叉树
// function Tree() {
//   this.root = null;
// }

// // 以二叉搜索树为例子
// // 二叉搜索树，满足大的放右边，小的放左边（找到空为止）
// Tree.prototype.insert = function (data) {
//   let node = new Node(data);
//   if (!this.root) {
//     this.root = node;
//     return node; //不return就会死循环
//   }
//   let cur = this.root;
//   let parent = null;
//   while (cur) {
//     parent = cur;
//     if (cur.val < data) {
//       cur = cur.right;
//       if (!cur) {
//         parent.right = node;
//       }
//     } else {
//       cur = cur.left;
//       if (!cur) {
//         parent.left = node;
//       }
//     }
//   }
//   return node;
// };

// //获取最小值
// Tree.prototype.getMin = function () {
//   let cur = this.root;
//   let pre = null;
//   if (!cur) {
//     return pre;
//   }
//   while (cur) {
//     pre = cur;
//     cur = cur.left;
//   }
//   return pre;
// };

// //获取最大值
// Tree.prototype.getMax = function () {
//   let cur = this.root;
//   let pre = null;
//   if (!cur) {
//     return pre;
//   }
//   while (cur) {
//     pre = cur;
//     cur = cur.right;
//   }
//   return pre;
// };

// //获取一个节点
// Tree.prototype.getNode = function (data) {
//   let cur = this.root;
//   if (!cur || !data) {
//     return null;
//   }
//   while (cur) {
//     if (cur.val === data) {
//       return cur;
//     } else if (data > cur.val) {
//       cur = cur.right;
//     } else {
//       cur = cur.left;
//     }
//   }
//   return null;
// };

// //获取树深度
// Tree.prototype.getDeep = function (root) {
//   let bfs = (root, deep) => {
//     if (!root) {
//       return deep;
//     }
//     let lDeep = deep;
//     let rDeep = deep;
//     return Math.max(bfs(root.left, ++lDeep), bfs(root.right, ++rDeep));
//   };
//   return bfs(root, 0);
// };

// //获取树深度 DFS, 如果是用队列就是BFS; 如果是图要借助hash遍历
// Tree.prototype.getDeep1 = function (root) {
//   if (!root) {
//     return 0;
//   }
//   let stack = [
//     {
//       key: root,
//       val: 1,
//     },
//   ];
//   let deep = 0;
//   let cur;
//   let curNode;
//   let node_Deep;
//   let res = [];
//   while (stack.length) {
//     cur = stack.pop();
//     curNode = cur.key;
//     res.push(curNode.val);
//     node_Deep = cur.val;
//     deep = Math.max(deep, node_Deep);
//     if (curNode.left)
//       stack.push({
//         key: curNode.left,
//         val: node_Deep + 1,
//       });
//     if (curNode.right)
//       stack.push({
//         key: curNode.right,
//         val: node_Deep + 1,
//       });
//   }
//   // console.log(res)
//   return deep;
// };

// //前序遍历
// // 取跟节点为目标节点，开始遍历
// // 1.访问目标节点
// // 2.左孩子入栈 -> 直至左孩子为空的节点
// // 3.节点出栈，以右孩子为目标节点，再依次执行1、2、3
// Tree.prototype.preOrder = function (root) {
//   if (!root) {
//     return null;
//   }
//   let cur = root;
//   let stack = [];
//   let res = [];
//   while (cur || stack.length) {
//     while (cur) {
//       res.push(cur.val);
//       stack.push(cur);
//       cur = cur.left;
//     }
//     cur = stack.pop();
//     cur = cur.right;
//   }
//   return res;
// };

// //中序遍历，
// // 取跟节点为目标节点，开始遍历
// // 1.左孩子入栈 -> 直至左孩子为空的节点
// // 2.节点出栈 -> 访问该节点
// // 3.以右孩子为目标节点，再依次执行1、2、3
// Tree.prototype.middleOrder = function (root) {
//   if (!root) {
//     return null;
//   }
//   let cur = root;
//   let stack = [];
//   let res = [];
//   while (cur || stack.length) {
//     while (cur) {
//       stack.push(cur);
//       cur = cur.left;
//     }
//     cur = stack.pop();
//     res.push(cur.val);
//     cur = cur.right;
//   }
//   return res;
// };

// //后序遍历
// // 取跟节点为目标节点，开始遍历
// // 1.左孩子入栈 -> 直至左孩子为空的节点
// // 2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
// // 3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3
// Tree.prototype.laterOrder = function (root) {
//   if (!root) {
//     return null;
//   }
//   let cur = root;
//   let stack = [];
//   let res = [];
//   let last = null;
//   while (cur || stack.length) {
//     while (cur) {
//       stack.push(cur);
//       cur = cur.left;
//     }
//     cur = stack[stack.length - 1];
//     // 2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
//     if (!cur.right || last == cur.right) {
//       cur = stack.pop();
//       res.push(cur.val);
//       last = cur;
//       cur = null; //避免迭代的时候出现不为空。死循环
//     } else {
//       // 3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3
//       cur = cur.right;
//     }
//   }
//   return res;
// };

// var t = new Tree();
// t.insert(5);
// t.insert(1);
// t.insert(4);
// t.insert(2);
// t.insert(6);
// t.insert(7);
// t.insert(3);
// t.insert(8);
// t.insert(-1);

// console.log(t);
// console.log(t.getMin(), t.getMax());
// console.log(t.getNode(2));
// console.log(t.getDeep(t.root));
// console.log(t.getDeep1(t.root));

// console.log("========================");
// console.log(t.preOrder(t.root)); //5,1,-1,4,2,3,6,7,8
// console.log("========================");
// console.log(t.middleOrder(t.root)); //-1,1,2,3,4,5,6,7,8
// console.log("========================");
// console.log(t.laterOrder(t.root)); //-1,3,2,4,1,8,7,6,5

// /**101
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function (root) {
//   //想清楚思路
//   //给树照个镜子
//   let check = (node, node2) => {
//     if (!node && !node2) {
//       return true;
//     }
//     if (!node || !node2) {
//       return false;
//     }
//     if (node.val != node2.val) {
//       return false;
//     }
//     return check(node.left, node2.right) && check(node.right, node2.left);
//   };
//   return check(root, root);
// };

// /** 114
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {void} Do not return anything, modify root in-place instead.
//  */
// var flatten = function (root) {
//   if (!root) return;
//   //先序遍历
//   let stack = [];
//   let cur = root;
//   let res = [];
//   while (cur || stack.length) {
//     while (cur) {
//       res.push(cur.val);
//       stack.push(cur);
//       cur = cur.left;
//     }
//     cur = stack.pop();
//     cur = cur.right;
//   }
//   res.shift();
//   let p = root;
//   root.left = null;
//   root.right = null;
//   while (res.length) {
//     p.right = new TreeNode(res.shift());
//     p = p.right;
//   }
// };

// // 后续遍历二叉树
// // 在遍历二叉树每个节点前都会遍历其左右子树
// // 比较左右子树的深度，若差值大于1 则返回一个标记 -1表示当前子树不平衡
// // 左右子树有一个不是平衡的，或左右子树差值大于1，则整课树不平衡
// // 若左右子树平衡，返回当前树的深度（左右子树的深度最大值+1）
// var isBalanced = function (root) {
//   return balanced(root) != -1;
// };

// function balanced(node) {
//   if (!node) {
//     return 0;
//   }
//   const left = balanced(node.left);
//   const right = balanced(node.right);
//   if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
//     return -1;
//   }
//   return Math.max(left, right) + 1;
// }

// /** 509
//  * // Definition for a Node.
//  * function Node(val,children) {
//  *    this.val = val;
//  *    this.children = children;
//  * };
//  */
// /**
//  * @param {Node} root
//  * @return {number[]}
//  */
// // var postorder = function (root) {
// //   let res = [];
// //   let pOrder = (root, res) => {
// //     if (!root) {
// //       return;
// //     }
// //     for (var i = 0; i < root.children.length; i++) {
// //       pOrder(root.children[i], res);
// //     }
// //     res.push(root.val);
// //   };
// //   pOrder(root, res);
// //   return res;
// // };

// // 前序（根左右）：
// // 1.一直找左子树，遍历。
// // 2.然后左子树一直入栈，出栈，再遍历右子树重复上述过程。

// // 中序（左根右）：
// // 1.二叉搜索树的中序遍历是递增的。
// // 2.左子树一直入栈
// // 3.然后出栈遍历
// // 4.然后右子树递归同样的过程

// // 后序（左右根）：
// // 1.左孩子入栈 -> 直至左孩子为空的节点
// // 2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
// // 3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3

// /** 124
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// // var maxPathSum = function (root) {
// //   let res = Number.MIN_VALUE;
// //   let dfs = (root) => {
// //     if (!root) {
// //       return 0;
// //     }
// //     let left = dfs(root.left);
// //     let right = dfs(root.right);
// //     //更新结果
// //     res = Math.max(res, left + right + root.val);
// //     //走最大的
// //     return Math.max(0, Math.max(left, right) + root.val);
// //   };
// //   dfs(root);
// //   return res;
// // };

// /** 199二叉树的右视图, BFS广搜
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// // var rightSideView = function (root) {
// //   const res = [];
// //   const queue = [root];
// //   while (queue.length) {
// //     const len = queue.length;
// //     res.push(queue[0]);
// //     while (len > 0) {
// //       const node = queue.shift();
// //       if (node.right) childs.push(node.right);
// //       if (node.left) childs.push(node.left);
// //       len--;
// //     }
// //   }
// //   return res;
// // };

// /** 226 翻转二叉树
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
// // var invertTree = function (root) {
// //   if (!root) {
// //     return root;
// //   }
// //   let temp = root.right;
// //   root.right = root.left;
// //   root.left = temp;
// //   invertTree(root.left);
// //   invertTree(root.right);
// // };

// /** 230 中序遍历
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  */
// // var kthSmallest = function (root, k) {
// //   if (!root || k < 1) {
// //     return;
// //   }
// //   const stack = [];
// //   const cur = root;
// //   const res = [];
// //   while (cur || stack.length) {
// //     while (cur) {
// //       stack.push(cur);
// //       cur = cur.left;
// //     }
// //     cur = stack.pop();
// //     res.push(cur.val);
// //     cur = cur.right;
// //   }
// //   // console.log(res)
// //   return res[k - 1];
// // };

// /** 257二叉树的所有路径
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {string[]}
//  */
// // var binaryTreePaths = function (root) {
// //   const res = [];
// //   const bfs = (root, str) => {
// //     if (!root) {
// //       return;
// //     }
// //     if (!root.left && !root.right) res.push(str + "->" + root.val);
// //     if (root.left) bfs(root.left, str + root.val + "->");
// //     if (root.right) bfs(root.right, str + root.val + "->");
// //   };
// //   bfs(root, "");
// //   return res;
// // };

// /** 337
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// // var rob = function (root) {
// //   if (!root) {
// //     return 0;
// //   }
// //   //偷根节点
// //   let robthat = root.val;
// //   if (root.left) {
// //     robthat += rob(root.left.left) + rob(root.left.right);
// //   }
// //   if (root.right) {
// //     robthat += rob(root.right.left) + rob(root.right.right);
// //   }
// //   //不偷根节点
// //   let norob = rob(root.left);
// //   norob += rob(root.right);
// //   return Math.max(robthat, norob);
// // };

// // 二叉树中和为某一值的路径
// // function FindPath(root, expectNumber) {
// //   const result = [];
// //   if (root) {
// //     FindPathCore(root, expectNumber, [], 0, result);
// //   }
// //   return result;
// // }
// // 套用回溯算法的思路
// // 设定一个结果数组result来存储所有符合条件的路径
// // 设定一个栈stack来存储当前路径中的节点
// // 设定一个和sum来标识当前路径之和
// // 从根结点开始深度优先遍历，每经过一个节点，将节点入栈
// // 到达叶子节点，且当前路径之和等于给定目标值，则找到一个可行的解决方案，将其加入结果数组
// // 遍历到二叉树的某个节点时有2个可能的选项，选择前往左子树或右子树
// // 若存在左子树，继续向左子树递归
// // 若存在右子树，继续向右子树递归
// // 若上述条件均不满足，或已经遍历过，将当前节点出栈，向上回溯
// // function FindPathCore(node, expectNumber, stack, sum, result) {
// //   stack.push(node.val);
// //   sum += node.val;
// //   if (!node.left && !node.right && sum === expectNumber) {
// //     result.push(stack.slice(0));
// //   }
// //   if (node.left) {
// //     FindPathCore(node.left, expectNumber, stack, sum, result);
// //   }
// //   if (node.right) {
// //     FindPathCore(node.right, expectNumber, stack, sum, result);
// //   }
// //   stack.pop();
// // }

// /** 239 滑动窗口的最大值（滑呀滑）
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// // var maxSlidingWindow = function (nums, k) {
// //   let len = nums.length;
// //   if (len * k == 0) return [];
// //   if (k == 1) return nums;
// //   let queue = nums.slice(0, k);
// //   let cur = k - 1;
// //   let target = [];
// //   while (cur < len) {
// //     let max = Math.max.apply(Math, queue);
// //     target.push(max);
// //     cur++;
// //     queue.push(nums[cur]);
// //     queue.shift();
// //   }
// //   return target;
// // };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const treeOrder = function (root) {
  //没有访问过，颜色标记为0
  const stack = [[0, root]];
  const result = []
  while(stack.length){
    let [color, node] = stack.pop()
    // 节点不存在
    if(!node) continue;
    // 没有访问过，颜色为0
    if(!color){
      // 因为是模拟栈，栈是先进后出的; 那我们倒着写就行了
      // 根节点的位置就决定了三种遍历方式，还记得嘛？
      stack.push([0, node.right])
      stack.push([0, node.left])
      stack.push([1, node])   
    }else{
      result.push(node.val)
    }
  }
  return result
}
