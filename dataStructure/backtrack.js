/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-10-11 15:50:11
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-06 15:04:21
 */
// /*
//  * @Description: 
//  * @Autor: hrt
//  * @Date: 2019-10-11 15:50:11
//  * @LastEditors: hrt
//  * @LastEditTime: 2019-10-28 18:24:51
//  * 回溯算法 最经典的你N皇后的问题
//  * 递归回溯，回溯法可以直接的看成是DFS深度优先的问题，但是它需要明确解空间，回溯状态
//  * “回溯搜索”算法即“深度优先遍历 + 状态重置 + 剪枝”（这道题没有剪枝）
//  * 
//  */

// // 解决八皇后问题，可以分为两个层面：
// // 1.找出第一种正确摆放方式，也就是深度优先遍历。
// // 2.找出全部的正确摆放方式，也就是广度优先遍历。
// // 先深度后广度

// /*
//  * 1 1 1 1 1 1 1 1 
//  * 1 1 1 1 1 1 1 1 
//  * 1 1 1 1 1 1 1 1   
//  * 1 1 1 1 1 1 1 1 
//  * 1 1 0 1 1 1 1 1  // 4 2
//  * 1 1 1 1 1 1 1 1 
//  * 1 1 1 1 1 1 1 1 
//  * 1 1 1 1 1 1 1 1 
//  */

// var solveNQueens1 = function (n) {
//   const result = [] //保存N后结果   
//   function getRowPos(rowIndex, arr = []) {
//     // n个棋子都放置完成，返回结果
//     if (rowIndex === n) {
//       result.push(arr)
//       return
//     }
//     //每行都有八个
//     for (let col = 0; col < n; col++) {
//       // 如果是第一行，就直接放入，然后跳到下一行
//       if (rowIndex === 0) {
//         arr = [col] //索引代表行，值代表列
//         getRowPos(rowIndex + 1, arr) //继续下一行
//       } else {
//         // 判断是否符合要求，符合就插入并继续跳到下一行
//         if (isOk(rowIndex, col, arr)) {
//           const newArr = [...arr]
//           newArr.push(col)
//           getRowPos(rowIndex + 1, newArr)
//         }
//       }
//     }
//   }

//   // 判断该位置是否合理
//   function isOk(row, col, arr) {
//     let leftTop = col - 1
//     let rightTop = col + 1
//     for (let i = row - 1; i >= 0; i--) {
//       const lastPos = arr[i]
//       // 判断正上方是否有棋子
//       if (lastPos === col) {
//         return false
//       }
//       // 判断左上方是否有棋子
//       if (leftTop >= 0 && lastPos === leftTop) {
//         return false
//       }
//       // 判断右上方是否有棋子
//       if (rightTop < n && lastPos === rightTop) {
//         return false
//       }
//       leftTop--
//       rightTop++
//     }
//     return true
//   }

//   // 格式化输出
//   function print() {
//     return result
//       .map(row => {
//         return row.map(col => {
//           let str = ''
//           for (let i = 0; i < n; i++) {
//             if (col === i) {
//               str += 'Q'
//             } else {
//               str += '.'
//             }
//           }
//           return str
//         })
//       })
//   }
//   //第0行开始放
//   getRowPos(0)
//   return print()
// };

// // console.log(solveNQueens(4))

// // 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
// /**
//  * @param {string} S
//  * @return {string[]}
//  */
// var letterCasePermutation = function (S) {
//   let res = []
//   //得到一个子串, 深度优先，因为递归执行会压栈
//   let dfs = (idx, str) => {
//     //满足条件，插入
//     if (idx === S.length) {
//       res.push(str)
//       return
//     }

//     let pattern = new RegExp("[0-9]");
//     //数字直接加，非数字递归
//     if (pattern.test(S[idx])) {
//       str += S[idx]
//       dfs(idx + 1, str)
//     } else {
//       isLowerCase(S[idx]) ? dfs(idx + 1, str + S[idx].toUpperCase()) : dfs(idx + 1, str + S[idx].toLowerCase())
//       dfs(idx + 1, str + S[idx])
//     }
//   }

//   function isLowerCase(ch) {
//     return ch >= 'a' && ch <= 'z'
//   }

//   dfs(0, '')
//   return res
// };

// // console.log(letterCasePermutation("a1b2"))

// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
// var letterCombinations = function (digits) {
//   let map = {
//     "2": "abc",
//     "3": "def",
//     "4": "ghi",
//     "5": "jkl",
//     "6": "mno",
//     "7": "pqrs",
//     "8": "tuv",
//     "9": "wxyz",
//   }

//   let res = []
//   let dfs = (idx, str) => {
//     if (idx == digits.length) {
//       res.push(str)
//       return
//     }
//     let d = digits[idx]
//     let strArr = map[d].split('')
//     while (strArr.length) {
//       dfs(idx + 1, str + strArr.shift())
//     }
//   }
//   dfs(0, '')
//   return digits.length > 0 ? res : digits
// };

// // console.log(letterCombinations('23'))


// // N后问题
// /**
//  * @param {number} n
//  * @return {string[][]}
//  */
// var solveNQueens1 = function (n) {
//   let res = []
//   // 判断该位置是否合理
//   function check(row, col, arr) {
//     let leftTop = col - 1
//     let rightTop = col + 1
//     for (let i = row - 1; i >= 0; i--) {
//       const lastPos = arr[i] //利用arr[i] 索引为行，值为列
//       // 判断正上方是否有棋子
//       if (lastPos === col) {
//         return false
//       }
//       // 判断左上方是否有棋子
//       if (leftTop >= 0 && lastPos === leftTop) {
//         return false
//       }
//       // 判断右上方是否有棋子
//       if (rightTop < n && lastPos === rightTop) {
//         return false
//       }
//       leftTop--
//       rightTop++
//     }
//     return true
//   }

//   //初始
//   let dfs = (row, arr) => {
//     //说明放完了
//     if (row == n) {
//       res.push(arr)
//       return
//     }
//     //第一行1-n
//     for (let col = 0; col < n; col++) {
//       //第一行直接放
//       if (row == 0) {
//         arr = [col]
//         dfs(row + 1, arr)
//       } else {
//         //检查当前行能不能放皇后
//         if (check(row, col, arr)) {
//           let newArr = [...arr, col] //可以放置进去
//           dfs(row + 1, newArr)
//         }
//       }
//     }
//   }

//   //格式化输出
//   let print = (res = []) => {
//     return res.map(row => row.map(col => {
//       let str = ''
//       for (let i = 0; i < n; i++) {
//         if (i == col) {
//           str += 'Q'
//         } else {
//           str += '.'
//         }
//       }
//       return str
//     }))
//   }
//   dfs(0)
//   return print(res)
// };

// // console.log(solveNQueens(4))


// // 输入: candidates = [2,3,6,7], target = 7,
// // 所求解集为:
// // [
// //   [7],
// //   [2,2,3]
// // ]
// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum = function (candidates, target) {
//   let res = []
//   //排序保证最小的在前面
//   candidates.sort((a, b) => a - b)
//   //深度优先
//   function dfs(min, t, arr) {
//     //目标值等于0
//     if (t == 0) {
//       res.push(arr)
//       return
//     }
//     //小于最小的数，剪枝
//     if (t < min) {
//       return
//     }
//     //t >= min
//     //但是会有重复的，怎么剪枝？后面选取的数不能比前面小！！
//     candidates.forEach(d => {
//       arr.sort((a, b) => b - a)
//       if (arr.length == 0 || d >= arr[0]) {
//         dfs(min, t - d, [...arr, d])
//       }
//     })
//   }
//   dfs(candidates[0], target, [])
//   return res
// };
// console.log(combinationSum([2, 3, 6, 7], 7))


// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum2 = function (candidates, target) {
//   let res = []
//   //排序保证最小的在前面
//   candidates.sort((a, b) => a - b)
//   //dp 来做

//   return res
// };

// /**
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
// var postorderTraversal = function (root) {
//   class Context { //执行上下文
//     constructor(node) {
//       this.node = node
//       this.step = 0
//       //如果是五叉树，就五个阶段，存储的遍历就是递归时候用到执行栈的东西
//     }
//   }

//   let stack = [] //执行栈
//   let cur = null
//   let res = []
//   stack.push(new Context(root))
//   while (stack.length) {
//     cur = stack[stack.length - 1] //拿出当前待执行的
//     if (cur.node == null) {
//       stack.pop() //出栈，执行栈为空的情况
//     } else if (cur.step == 0) {
//       cur.step++ //第一阶段，即准备执行的情况
//         stack.push(new Context(cur.node.left))
//     } else if (cur.step == 1) {
//       cur.step++ //第二阶段，浏览了左子树的时候
//         stack.push(new Context(cur.node.right))
//     } else { //第三阶段，浏览了左右子树的时候
//       res.push(cur.node.val)
//       stack.pop()
//     }
//   }
// };

// //二叉树层次遍历
// var levelOrder = function (root) {
//   let res = []

//   function search(layers, node, k) {
//     if (node == null) {
//       return;
//     }
//     if (layers[k] == undefined) {
//       layers[k] = [node.val];
//     } else {
//       layers[k].push(node.val);
//     }
//     search(layers, node.left, k + 1);
//     search(layers, node.right, k + 1);
//   }
//   search(res, root, 0)
//   return res;
// };

// //二叉树层次遍历BFS
// var levelOrder = function (root) {
//   let queue = []
//   let cur = null
//   let res = []
//   queue.push(root)
//   while (queue.length) {
//     let result = []
//     for (let i = 0, len = queue.length - 1; i < len; i++) {
//       cur = queue.shift()
//       result.push(cur.val)
//       if (cur.left) queue.push(cur.left);
//       if (cur.right) queue.push(cur.right);
//     }
//     res.push(result)
//   }
//   return res
// };

// /** 51.N皇后问题
//  * @param {number} n
//  * @return {string[][]}
//  */
// var solveNQueens = function (n) {
//   let ans = []
//   let solveQ = Array(n).fill('.')
//   solveQ.forEach((d, i, arr) => {
//     arr[i] = Array(n).fill('.')
//   })
//   backtrack(0, solveQ, ans);
//   console.log(ans)
//   return ans
// };

// //第几行，放置的皇后，结果
// function backtrack(row, solveQ, ans) {
//   //注意要全部皇后放完
//   if (row == solveQ.length) {
//     // console.log(solveQ)
//     ans.push(solveQ);
//   } else {
//     for (let col = 0; col < solveQ.length; col++) {
//       //如果选择的位置被攻击，跳过
//       if (check(row, col, solveQ)) {
//         //然后选择
//         solveQ[row][col] = 'Q'
//         // debugger
//         //然后进行下一行的选择
//         let newArr = []
//         solveQ.forEach(d => {
//           newArr.push([...d])
//         })
//         backtrack(row + 1, newArr, ans)
//         //回溯
//         solveQ[row][col] = '.'
//       }
//     }
//   }
// }

// //检查皇后是不是能放置,能放return true
// function check(row, col, solveQ) {
//   //检查正上方
//   for (let i = 0; i < solveQ.length; i++) {
//     if (solveQ[i][col] == 'Q') {
//       return false
//     }
//   }
//   //检查左上方
//   for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; j--, i--) {
//     if (solveQ[i][j] == 'Q') {
//       return false
//     }
//   }
//   //检查右上方
//   for (let i = row - 1, j = col + 1; j < solveQ.length && i >= 0; i--, j++) {
//     if (solveQ[i][j] == 'Q') {
//       return false
//     }
//   }
//   //没放到最后一个
//   return true
// }
// solveNQueens(8)


// //二叉树的遍历框架
// let traverse = (root) => {
//   if (!root) return;
//   // 前序遍历代码在这里
//   traverse = (root.left)
//   // 中序遍历代码在这里
//   traverse = (root.right)
//   // 后序遍历代码在这里
// }

// //N叉树的遍历框架（回溯法）
// let traverse = (root) => {
//   if (!root) return;
//   for (child in root.children) {
//     // 前序遍历代码在这里
//     traverse = (root.right)
//     // 后序遍历代码在这里
//   }
// }


// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function (nums) {
//   let ans = []
//   let track = []
//   let backtrack = (nums, track, ans) => {
//     if (nums.length == track.length) {
//       ans.push(track)
//     } else {
//       for (let i = 0; i < nums.length; i++) {
//         // 这一步避免掉操作原数组nums
//         if (track.indexOf(nums[i]) > -1) continue;
//         track.push(nums[i])
//         //  nums.splice(i, 1)
//         backtrack(nums, [...track], ans)
//         track.pop()
//         //  nums.splice(i, 0, nums[i])
//       }
//     }
//   }
//   backtrack(nums, track, ans);
//   // console.log(ans)
//   return ans
// };


// /**
//  * @param {number} n
//  * @return {string[][]}
//  */
// var solveNQueens = function (n) {
//   let board = getBoard(n)
//   let res = []
//   let backtrack = (board, row, res) => {
//     if (row == board.length) {
//       res.push(board)
//     } else {
//       for (let col = 0; col < board.length; col++) {
//         if (!check(row, col, board)) continue;
//         board[row][col] = 'Q'
//         let new_board = deepClone(board)
//         backtrack(new_board, row + 1, res)
//         board[row][col] = '.'
//       }
//     }
//   }
//   backtrack(board, 0, res);
//   res = print(res)
//   return res
// };
// //建立N后矩阵
// function getBoard(n) {
//   let res = Array(n).fill('.')
//   res.forEach((d, i, arr) => {
//     arr[i] = Array(n).fill('.')
//   })
//   return res
// }
// //检查皇后能不能放
// function check(row, col, board) {
//   //检查上方的
//   for (let i = 0; i <= row; i++) {
//     if (board[i][col] == 'Q') {
//       return false
//     }
//   }
//   //检查左上方
//   for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
//     if (board[i][j] == 'Q') {
//       return false
//     }
//   }
//   //检查右上方
//   for (let i = row, j = col; i >= 0 && j < board.length; i--, j++) {
//     if (board[i][j] == 'Q') {
//       return false
//     }
//   }
//   return true
// }
// //深度克隆一个矩阵，避免互相影响
// function deepClone(track) {
//   let res = []
//   track.forEach((d) => {
//     res.push([...d])
//   })
//   return res;
// }
// //格式化输出
// function print(res) {
//   res = res.map((d) => {
//     return d.map((item) => {
//       return item.join('')
//     })
//   })
//   return res
// }

// // solveNQueens(8)


// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permuteUnique = function (nums) {
//   //加一个map, 去重操作
//   let res = []
//   let seen = new Map();
//   let backtrack = (nums, seen, arr, res, visited) => {
//     if (arr.length == nums.length) {
//       let str = arr.join('')
//       if (!seen.has(str)) {
//         // console.log(str)
//         res.push(arr);
//         seen.set(str, str)
//       }
//     } else {
//       for (let i = 0; i < nums.length; i++) {
//         if (visited[i] !== undefined) continue;
//         arr.push(nums[i])
//         visited[i] = i
//         backtrack(nums, seen, [...arr], res, visited)
//         arr.pop()
//         delete visited[i]
//       }
//     }
//   }
//   backtrack(nums, seen, [], res, {})
//   return res;
// };

// // permuteUnique([1,1,2])

// /** 40
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum2 = function (candidates, target) {
//   //加一个map, 去重操作
//   let res = []
//   let visited = {}
//   let backtrack = (candidates, target, arr, res, visited, sum) => {
//     if (sum == target) { //符合要求
//       res.push(arr);
//     } else {
//       for (let i = 0; i < candidates.length; i++) {
//         if (candidates[i] > target) continue; //大于和
//         if (visited[i] == i) continue; //每个数只能浏览一遍
//         if (sum > target) break;

//         arr.push(candidates[i])
//         sum += candidates[i]
//         visited[i] = i
//         backtrack(candidates, target, [...arr], res, visited, sum)
//         sum -= candidates[i]
//         arr.pop()
//         delete visited[i]
//       }
//     }
//   }
//   backtrack(candidates, target, [], res, visited, 0)
//   console.log(res)
//   return res;
// };

// // combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)

// /** 78
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsets = function (nums) {
//   let res = []
//   let backtrack = (i, nums, res, tmp) => {
//     res.push(tmp);
//     for (let j = i; j < nums.length; j++) {
//       tmp.push(nums[j]);
//       backtrack(j + 1, nums, res, [...tmp]);
//       tmp.pop();
//     }
//   }
//   backtrack(0, nums, res, []);
//   // console.log(res);
//   return res;
// };

// subsets([1, 2, 3])

// /** 79.单词搜索
//  * @param {character[][]} board
//  * @param {string} word
//  * @return {boolean}
//  */
// var exist = function (board, word) {
//   let visited = Array(board.length).fill(false)
//   visited.forEach((d, i, arr) => {
//     arr[i] = Array(board[0].length).fill(false)
//   })
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (word[0] == board[i][j] && backtrack(i, j, 0, word, visited, board)) return true;
//     }
//   }
//   return false;
// };


// function backtrack(i, j, idx, word, visited, board) {
//   if (idx == word.length) return true;
//   if (i >= board.length || i < 0 || j >= board[0].length || j < 0 || board[i][j] != word.charAt(idx) || visited[i][j])
//     return false;
//   visited[i][j] = true;
//   if (backtrack(i + 1, j, idx + 1, word, visited, board) || backtrack(i - 1, j, idx + 1, word, visited, board) || backtrack(i, j + 1, idx + 1, word, visited, board) || backtrack(i, j - 1, idx + 1, word, visited, board))
//     return true;
//   visited[i][j] = false; // 回溯
//   return false;
// }

// var board = [
//   ['A', 'B', 'C', 'E'],
//   ['S', 'F', 'C', 'S'],
//   ['A', 'D', 'E', 'E']
// ]
// // console.log(exist(board, "ABCCED"))
// // 给定 word = "ABCCED", 返回 true.
// // 给定 word = "SEE", 返回 true.
// // 给定 word = "ABCB", 返回 false.

// /** 90
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsetsWithDup = function (nums) {
//   let res = []
//   nums.sort((a, b) => a - b)
//   let backtrack = (nums, idx, arr, res) => {
//     res.push(arr);
//     for (let i = idx; i < nums.length; i++) {
//       if (i > idx && nums[i - 1] == nums[i]) continue;
//       arr.push(nums[i]);
//       backtrack(nums, i + 1, [...arr], res);
//       arr.pop();
//     }
//   }
//   backtrack(nums, 0, [], res)
//   return res;
// };
// console.log(subsetsWithDup([1, 2, 2]))
// 输入: [1,2,2]
// 输出:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

/** 1219
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let res = 0
  let row = grid.length
  let col = grid[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] != 0) {
        res = Math.max(res, backtrack(i, j, grid))
      }
    }
  }
  return res;
}

function isArea(x, y, g) { // 判断是否这个点是否可以走
  return (x >= 0 && x < g.length) && (y >= 0 && y < g[0].length) && g[x][y];
}

function backtrack(i, j, grid) {
  if (!isArea(i, j, grid)) {
    return 0
  } else {
    let temp = grid[i][j];
    let cur = 0
    cur += temp
    grid[i][j] = 0
    //  let new_grid = deepCloneArr(grid)
    cur = Math.max(cur, temp + backtrack(i + 1, j, grid))
    cur = Math.max(cur, temp + backtrack(i - 1, j, grid))
    cur = Math.max(cur, temp + backtrack(i, j + 1, grid))
    cur = Math.max(cur, temp + backtrack(i, j - 1, grid))
    grid[i][j] = temp
    return cur;
  }
}

//深克隆二维数组
function deepCloneArr(track) {
  let res = []
  track.forEach((d) => {
    res.push([...d])
  })
  return res;
}

//二维数组填满某个值
function getArrFillTag(n = 1, tag = 0) {
  let res = Array(n).fill(tag)
  res.forEach((d, i, arr) => {
    arr[i] = Array(n).fill(tag)
  })
  return res;
}

// console.log(getMaximumGold(
//   [
//     [0, 6, 0],
//     [5, 8, 7],
//     [0, 9, 0]
//   ]
// ))

/** 1079 dfs
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  let words = new Map()
  tiles = tiles.split('')
  tiles.forEach((d) => {
    if (!words.has(d)) {
      words.set(d, 1)
    } else {
      words.set(d, words.get(d) + 1)
    }
  })
  let wordsKey = words.keys()
  wordsKey = Array.from(wordsKey)
  let dfs = (wordsKey, words) => {
    let res = 0;
    wordsKey.forEach(d => {
      if (words.get(d) != 0) {
        res += 1
        words.set(d, words.get(d) - 1)
        res += dfs(wordsKey, words)
        words.set(d, words.get(d) + 1)
      }
    })
    return res
  }
  // console.log(words, wordsKey)
  return dfs(wordsKey, words);
};
// console.log(numTilePossibilities("AAB"))

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  //右上角开始搜索
  //如果matrix位置上的值比目标值大，减少列
  //如果比目标值小，增大行！
  //时间复杂度O（m+n）
  let row = matrix.length
  let col = matrix[0].length
  let tIdx = [0, col - 1]
  while (tIdx[0] < row && tIdx[1] >= 0) {
    if (matrix[tIdx[0]][tIdx[1]] == target) {
      return true
    } else if (matrix[tIdx[0]][tIdx[1]] > target) {
      tIdx[1] -= 1
    } else {
      tIdx[0] += 1
    }
  }
  return false
};
console.log(searchMatrix(
  [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 5
))


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0
  if (!root) return res;
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    while (len > 0) {
      let node = queue.shift()
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i])
      }
      len--
    }
    res++
  }
  return res
};

let arr = [
  {id:'color', value:['1','2']},
  {id:'storage', value:['A','B']},
  {id:'small', value:['a','b']}
]
// 这样八个？
let tableData = [
  {color:"1", storage:"A", small:"a"},
  {color:"2", storage:"A", small:"a"},
]
// 思路
// id:value 抽出来做一个整体。item = 6
// 很明显是回溯算法，满足三个（一个坑挑一个），出现过 map 记录

// arr = [
  //     { color:['1','2'] },
  //     { storage:['A','B'] },
  //     { small:['a','b'] }
  // ]
  
let res = []
arr = arr.map(item => ({ [item.id]:item.value }))

function backtrack(arr, tempObj, set, idx){
let str = Object.values(tempObj).join('')
// 加入条件   
if(str.length === 3 && !set.has(str)){
      set.add(str)
      res.push(tempObj)
}else{
  // 剪枝
  if(idx >= arr.length){
      return
  } 
  for(let i = idx; i < arr.length; i++){
      let itemObj = arr[i]
      let key = Object.keys(itemObj)[0]
      let valuesArr = itemObj[key]
      for(let j = 0; j < valuesArr.length; j++){
          let val = valuesArr[j]
          tempObj[key] = val
          // 每组选一个
          backtrack(arr, {...tempObj}, set, idx + 1)
          // 选完回溯
          delete tempObj[key]
      }
  }
}
}
backtrack(arr, {}, new Set(), 0)

console.log(res)

