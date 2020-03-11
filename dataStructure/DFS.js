/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-05 15:40:59
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-07 10:35:28
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let res = 0

  function dfs(root, str) {
    if (!root) return;
    if (!root.left && !root.right) {
      res += Number(str + root.val)
    }
    dfs(root.left, str + root.val);
    dfs(root.right, str + root.val);
  }
  dfs(root, '')
  console.log(res)
  return res;
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  //直接在边缘探索，保留不被包围的DFS
  let row = board.length
  let col = board[0].length
  let dfs = (x, y, board) => {
    if (!isArea(x, y, board)) return;
    if (board[x][y] != 'O') return;
    board[x][y] = '1'
    dfs(x + 1, y, board)
    dfs(x - 1, y, board)
    dfs(x, y + 1, board)
    dfs(x, y - 1, board)
  }
  //扫第一行
  for (let i = 0; i < col; i++) {
    dfs(0, i, board)
  }
  //扫最后一行
  for (let i = 0; i < col; i++) {
    dfs(row - 1, i, board)
  }
  //扫第一列
  for (let i = 0; i < row; i++) {
    dfs(i, 0, board)
  }
  //扫最后一列
  for (let i = 0; i < row; i++) {
    dfs(i, col - 1, board)
  }
  board = board.map((item) => {
    return item.map((d, i, arr) => {
      if (d == '1') {
        arr[i] = 'O'
      } else if (d == 'O') {
        arr[i] = 'X'
      }
    })
  })
  return board
};

function isArea(x, y, g) {
  return (x >= 0 && x < g.length) && (y >= 0 && y < g[0].length)
}

/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/** 133
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  return JSON.parse(JSON.stringify(node))
};
// console.log(cloneGraph(obj))


/** bfs
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
var largestValues = function (root) {
  if (!root) return;
  let res = []
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    let cur = Number.MIN_SAFE_INTEGER
    while (len > 0) {
      let node = queue.shift()
      cur = Math.max(cur, node.val)
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
    res.push(cur)
  }
  console.log(res)
  return res
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  //找中点，左右递归下去
  function helper(head, tail) {
    if (head == tail) return null;
    // mid
    let slow = head;
    let fast = head;
    while (fast != tail && fast.next != tail) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let root = new TreeNode(slow.val);
    root.left = helper(head, slow);
    root.right = helper(slow.next, tail);
    return root;
  }
  if (!head) return null;
  return helper(head, null)
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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root) return;
  let res = []
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    res = [...queue]
    while (len > 0) {
      let node = queue.shift()
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
  }
  console.log(res)
  return res[0].val
};



var longestUnivaluePath = function (root) {
  let ans = 0;
  arrowLength(root, ans);
  return ans;
}

function arrowLength(node, ans) {
  if (node == null) return 0;
  let left = arrowLength(node.left, ans);
  let right = arrowLength(node.right, ans);
  let arrowLeft = 0,
    arrowRight = 0;
  if (node.left != null && node.left.val == node.val) {
    arrowLeft += left + 1;
  }
  if (node.right != null && node.right.val == node.val) {
    arrowRight += right + 1;
  }
  ans = Math.max(ans, arrowLeft + arrowRight);
  return Math.max(arrowLeft, arrowRight);
}