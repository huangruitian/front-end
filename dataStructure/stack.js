/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-09-20 15:56:41
 * @LastEditors: hrt
 * @LastEditTime: 2019-10-21 17:13:30
 */
// 棒球比赛
var calPoints = function (ops) {
  let res = []
  let pre1, pre2;
  ops.map(d => {
    switch (d) {
      case 'C':
        if (res.length) {
          res.pop()
        }
        break
      case 'D':
        pre1 = res.pop(),
          res.push(pre1, pre1 * 2)
        break
      case '+':
        pre1 = res.pop(),
          pre2 = res.pop();
        res.push(pre2, pre1, pre2 + pre1)
        break
      default:
        // pre1 = res.length > 0 ? res.pop() : 0
        res.push(d * 1)
    }
  })
  return res.reduce((t, d) => t + d)
};
// calPoints(["5", "2", "C", "D", "+"])

// 20有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true;
  // '('，')'，'{'，'}'，'['，']' 开括号进栈，闭括号出栈
  let stack = []
  let map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  for (let i = 0, len = s.length; i < len; i++) {
    if (map[s[i]]) {
      stack.push(s[i])
    } else {
      let sLen = stack.length;
      if (sLen == 0 || map[stack[sLen - 1]] != s[i]) {
        return false
      } else {
        stack.pop()
      }
    }
  }
  return stack.length > 0 ? false : true
};

// 71.简化路径
// 输入："/a/../../b/../c//.//"
// 输出："/c"
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let pathArr = path.split('/')
  let stack = []
  for (let i = 0, len = pathArr.length; i < len; i++) {
    let item = pathArr[i]
    if (item == '..') {
      stack.pop()
    } else if (item && item != '.') {
      stack.push(item)
    }
  }
  return stack.length > 0 ? '/' + stack.join('/') : '/'
};
console.log(simplifyPath("/"))

/** 二叉树中序遍历（左根右）
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
  // 4 1 5  2   6 3 7
  let res = []
  let dfs = (node, res) => {
    if (!node) return;
    if (node.left) dfs(node.left, res);
    res.push(node.val)
    if (node.right) dfs(node.right, res);
  }
  dfs(root, res)
  return res
};

// 非递归？一直左边再右边
var inorderTraversal = function (root) {
  // 4 1 5  2   6 3 7
  if (!root) return;
  let res = []
  let stack = []
  let cur = root
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right //左边出完到右边
  }
  return res
};


/** 103.二叉树层次遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let res = []
  let serch = (node, k, res) => {
    if (!node) return;
    if (res[k] == undefined)
      res[k] = [node.val];
    else if (k & 1)
      res[k].unshift(node.val);
    else
      res[k].push(node.val);
    if (node.left) serch(node.left, k + 1, res);
    if (node.right) serch(node.right, k + 1, res);
  }
  serch(root, 0, res)
  return res;
};

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
var preorderTraversal = function (root) {
  // 根左右
  let res = []
  let dfs = (node, res) => {
    if (!node) return
    res.push(node.val)
    if (node.left) dfs(node.left, res);
    if (node.right) dfs(node.right, res);
  }
  dfs(root, res)
  return res
};

//非递归咋实现，用栈
var preorderTraversal = function (root) {
  // 根左右 1 2 4 5 3 6 7
  if (!root) return;
  let res = []
  let stack = []
  let cur = root
  while (cur || stack.length > 0) {
    while (cur) {
      res.push(cur.val) //先输出根
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right //左边出完到右边
  }
  return res
};

/** 左右根
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
var postorderTraversal = function (root) {
  let res = []
  let dfs = (node, res) => {
    if (!node) return;
    if (node.left) dfs(node.left, res);
    if (node.right) dfs(node.right, res);
    res.push(node.val)
  }
  dfs(root, res)
  return res;
};

// 非递归？1 【2 4 5】【3 6 7】
var postorderTraversal = function (root) {
  class Context { //执行上下文, 存放各种临时变量
    constructor(node) {
      this.node = node
      this.setp = 0
    }
  }
  let res = []
  if (!root) return res;
  let stack = []
  let cur = null
  stack.push(new Context(root))
  while (stack.length) {
    cur = stack[stack.length - 1] //执行栈中的第一个，待执行
    if (cur.node == null) { //递归条件出口
      stack.pop()
    } else if (cur.setp == 0) { //第一个状态（递归初始状态）
      cur.setp++ //第二个状态前
      stack.push(new Context(cur.node.left))
    } else if (cur.setp == 1) { //第二个状态
      cur.setp++ //第三个状态前
      stack.push(new Context(cur.node.right))
    } else { //第三个状态
      res.push(cur.node.val)
      stack.pop()
    }
  }
  return res;
};



var zigzagLevelOrder = function (root) {
  let res = []
  let queue = []
  let cur = null
  let k = 0;
  if (!root) return res;
  queue.push(root)
  while (queue.length) {
    let result = []
    for (let i = 0, len = queue.length; i < len; i++) {
      cur = queue.shift()
      k & 1 ? result.unshift(cur.val) : result.push(cur.val)
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    res.push(result)
    k++
  }
  return res;
};

// 输入: ["4", "13", "5", "/", "+"]
// 输出: 6
// 解释: (4 + (13 / 5)) = 6
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = []
  let map = {
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/'
  }
  for (let i = 0, len = tokens.length; i < len; i++) {
    let d = tokens[i]
    if (map[d]) {
      let left = stack.pop()
      let right = stack.pop()
      let sum = 0
      switch (map[d]) {
        case '+':
          stack.push(right + left)
          break;
        case '-':
          stack.push(right - left)
          break;
        case '*':
          stack.push(right * left)
          break;
        default:
          sum = Math.trunc(right / left)
          stack.push(sum)
          break;
      }
    } else {
      stack.push(Number(d))
    }
  }
  console.log(stack);
  return stack
};
// evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])

/** 11. 盛最多水的容器 (双指针)
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let h = Math.min(height[left], height[right])
    let w = right - left
    if (h == height[left]) left++;
    else right--;
    res = Math.max(h * w, res)
  }
  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height == null || height.length == 0) return 0;
  let left = 0;
  let right = height.length - 1;
  let left_max = 0; //左边最大高度
  let right_max = 0; //右边最大高度
  let res = 0;
  // 这道题真正难点在于: 在一个位置能容下的雨水量等于它左右两边柱子最大高度的;最小值减去它的高度;
  // dp = min(left_max, right_max) - height[i] 状态主板以方程
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] < left_max) res += left_max - height[left];
      else left_max = height[left];
      left++;
    } else {
      if (height[right] < right_max) res += right_max - height[right];
      else right_max = height[right];
      right--;
    }
  }
  return res;
};