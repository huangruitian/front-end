/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-09-28 09:22:36
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-06 18:16:20
 */
// 动态规划
// 动态规划定义：
// 1.状态转移方程，2.最优子结构，3.边界
// 不同路径II
// 动态规划说白了就是分阶段解决问题，分阶段逐步简单解决问题
// 注意和递归相反的，递归是找规律，是从局部开始考虑，而DP是从整体开始考虑

// dp的核心思想是把一个复杂的问题拆成若干个子问题，通过解决子问题来逐步解决大问题。
// tip:使用动态规划有个前提，当且仅当每个子问题都是离散的（即每个子问题不依赖其它子问题），才能使用动态规划

// 0-1背包问题
// 现在有这么一个场景， “你”是一名“小偷”，你带了个包去“偷东西”，。

// 条件1：每个商品只有一个，要么拿，要么不拿。（0-1背包问题） 
// 条件2：你最多拿得动4kg的东西。（固定大小，可不装满）
/**
 * 商品   价格   重量
 * A     3000   4kg
 * B     2000   3kg
 * C     1500   1kg
 * D     2000   1kg
 */

//在有限的重量条件下，如何**“偷”**，赚的钱最多？

/**
 * 1.暴力枚举出所有商品的排列组合， 舍去所有超出重量要求的组合， 从中挑一个最大的。
 *   可行，但是太慢了，每多一件商品都会多2倍的组合。
 *   O(2^n), 指数复杂度，太慢了
 */

/**
 * 2.贪心算法（不可行）
 *   通过某个贪心策略（拿最贵的、拿性价比最高的商品）来得出近似解。
 *   这种方案接近最优解，是近似解，但不一定是最优解，故不可行。
 */

/**
 * 3.动态规划（可行，推荐）
 *   原理：先解决子背包最优，再解决大背包最优。
 *   先绘制出一张表格，一会我们一列一列慢慢填。（PS：体会动态规划的算法过程）
 */

/**
 * 表格：先解读一下这个表格， 
 *      行：代表了商品行（对应i）， 
 *      列：代表了重量列（对应j）， 
 *      格：代表当前的已有的商品、已有重量下所能拿的最大价值。
 * ======================================================>
 * 商品\ 子背包最大重量|  1     2     3     4   | j
 *         3   (4kg) A  /     /     /     3000
 *         2   (3kg) B  /     /     2000  3000
 *       1.5   (1kg) C  1500  1500  2000  3500
 *         2   (1kg) D  2000  3500  3500  4000
 *                   i
 */
/**
 * 原理解释： 
 *     简单理解为有四件商品（行），在最多1kg，2kg，3kg，4kg情况（列）下的最大价值组合（表格填充）
 *     如果能装得下当前商品，以填dp[2][3]为例:
 *     当前的最大价值 = max{当前物品价值（1500）+ 剩余重量的最大价值（2000）, 3000} 
 *     dp[2][3] = max(p[3] + dp[2-1][j-w[p]], dp[2-1][3]) 
 *              = max(1500 + dp[2-1][3-1], dp[2-1][3]) = max(1500+2000, 3000)
 *     如果不能装得下当前商品，dp[i][j] = dp[i - 1][j]
 *     详细解释：因为如果物品装了，重量要减去该物品的重量，数量也要减去该物品。dp[i-1][j-w[i]]
 *              如果没装，只需要减去数量, 而取上一个数量相同重量的最大价值 dp[i-1][j]
 *     状态转移方程：
 *          dp[i][j] = max(p[i] + dp[i-1][j-w[i]], dp[i-1][j]) // 这个物品可以装
 *          dp[i][j] = dp[i-1][j]                              // 这个物品不可以装，直接取相同重量没有这个物品的最大价值
 */

// 代码实现（基础版本）
// var package_dp = function (prices, weights, m, w) { //m, w 物品的数量和背包的容量
//   var dp = []
//   for (let i = 0; i < m; i++) { //m个物品
//     dp[i] = Array(w + 1).fill(0)
//     for (let j = 1; j <= w; j++) { //w背包容量
//       if (i == 0) { //第一行也计算出来
//         dp[i][j] = j < weights[i] ? 0 : prices[i]
//       } else if (weights[i] > j) { //当前的背包不能装下此物品
//         dp[i][j] = dp[i - 1][j]
//       } else {
//         let p1 = dp[i - 1][j] //不取当前物品
//         let p2 = prices[i] + dp[i - 1][j - weights[i]] //取当前物品
//         dp[i][j] = Math.max(p1, p2)
//       }
//     }
//   }
//   console.log(dp)
//   return dp[m - 1][w]
// }

//优化技巧
// var package_dp = function (prices, weights, m, w) { //m, w 物品的数量和背包的容量
//   var dp = []
//   dp[-1] = Array(w + 1).fill(0) //利用负一行巧妙处理多个判断
//   for (let i = 0; i < m; i++) { //m个物品
//     dp[i] = []
//     for (let j = 0; j <= w; j++) { //w背包容量
//       if (weights[i] > j) { //当前的背包不能装下此物品
//         dp[i][j] = dp[i - 1][j]
//       } else {
//         let p1 = dp[i - 1][j] //不取当前物品
//         let p2 = prices[i] + dp[i - 1][j - weights[i]] //取当前物品
//         dp[i][j] = Math.max(p1, p2)
//       }
//     }
//   }
//   console.log(dp)
//   return dp[m - 1][w]
// }
//优化空间
//为什么要逆序？因为当物品z的价值很大，w=2，f(2) = p[2],没什么问题，当f(4)时，因为z物品的价值很大，正序会出现装两次！！！
//逆序就解决问题了。正序可以装多次，是完全背包
var package_dp = function (prices, weights, m, w) { //m, w 物品的数量和背包的容量
  var dp = Array(w + 1).fill(0)
  for (let i = 0; i < m; i++) { //m个物品
    for (let j = w; j >= weights[i]; j--) { //大于当前物品容量就可以了，小于没必要判断了
      let p1 = dp[j] //不取当前物品
      let p2 = prices[i] + dp[j - weights[i]] //取当前物品
      dp[j] = Math.max(p1, p2)
    }
    console.log([].concat(dp))
  }
  return dp[w]
}
var M = 4; // 物体个数
var W = 4; // 背包总容量
var arrP = [3000, 2000, 1500, 2000]; // 物体价值
var arrW = [4, 3, 1, 1]; // 物体个数
// package_dp(arrP, arrW, M, W)

//如果可以多拿呢？完全背包
/**
 * 表格：先解读一下这个表格， 
 *      行：代表了商品行（对应i）， 
 *      列：代表了重量列（对应j）， 
 *      格：代表当前的已有的商品、已有重量下所能拿的最大价值。
 * ======================================================>
 * 商品\ 子背包最大重量|  1     2     3     4   | j
 *         3   (4kg) A  /     /     /     3000
 *         2   (3kg) B  /     /     2000  3000
 *       1.5   (1kg) C  1500  3000  4500  6000
 *         2   (2kg) D  1500  3000  4500  8000
 *                   i
 */
function package_dp2(prices, weights, m, w) { //m, w 物品的数量和背包的容量
  var dp = []
  for (let i = 0; i < m; i++) { //m个物品
    dp[i] = Array(w + 1).fill(0)
    for (let j = 1; j <= w; j++) { //w背包容量
      if (i == 0) { //第一行也计算出来
        dp[i][j] = j < weights[i] ? 0 : prices[i]
      } else if (weights[i] > j) { //当前的背包不能装下此物品
        dp[i][j] = dp[i - 1][j]
      } else { //当前的背包能装下此物品
        let p1 = dp[i - 1][j] //不取当前物品
        let p2 = prices[i] + dp[i][j - weights[i]] //取当前物品
        dp[i][j] = Math.max(p1, p2)
      }
    }
  }
  console.log(dp)
  return dp[m - 1][w]
}

/**
 * 来对DP做一个总结
 * 一、确定状态
 *    1.研究最优策略的最后一步
 *    2.化为子问题
 * 二、转移方程
 *    1.根据子问题的定义直接得到，上N部的结果组成
 * 三、初始条件和边界
 *    1.细心，考虑周全
 * 四、计算顺序
 *    1.利用之前的计算结果，其实就是保存递归的重复计算。关键是状态转移方程
 */

//爬楼梯
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // f(n) = f(n-1) + f(n-2) 状态转移方程，最优子结构
  // 边界 f(1) = 1, f(2) = 2 边界
  if (n < 3) {
    return n
  }
  let a1 = 1 //借鉴斐波那契数列思想
  let a2 = 2
  let a3 = 0
  // for(let i = 2; i < n; i++){
  //   a3 = a1 + a2;
  //   a1 = a2
  //   a2 = a3
  // }
  while (n >= 2) {
    a3 = a1 + a2;
    a1 = a2
    a2 = a3
    n--
  }
  return a3
};

// 不同路径II
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let r = obstacleGrid.length; //行
  let c = obstacleGrid[0].length //列
  if (obstacleGrid[0][0] == 1) { //起始点是1，直接返回0
    return 0;
  }
  obstacleGrid[0][0] = 1 //起始点不是1，有一条路径
  // 0 0 0 0 0 0 0
  // 0 0
  // 0
  // 0
  // obstacleGrid[1][1] = obstacleGrid[0][1] + obstacleGrid[1][0] 状态转移方程, 最优子结构
  // obstacleGrid[1][1] 是边界
  // 巧妙的利用数组的值来存储路径，obstacleGrid[r-1][c-1] 就是最后的结果
  for (let i = 1; i < r; i++) { //遍历一列，利用数组存值
    obstacleGrid[i][0] = (obstacleGrid[i][0] == 0 && obstacleGrid[i - 1][0] == 1) ? 1 : 0;
  }
  for (let i = 1; i < c; i++) { //遍历一行，利用数组存值
    obstacleGrid[0][i] = (obstacleGrid[0][i] == 0 && obstacleGrid[0][i - 1] == 1) ? 1 : 0;
  }
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      if (obstacleGrid[i][j] == 0) { // 可以通行
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
      } else {
        obstacleGrid[i][j] = 0
      }
    }
  }
  return obstacleGrid[r - 1][c - 1]
};

// 不同路径
function uniquePaths(m, n) {
  var arr = [];
  for (i = 0; i < n; i++) {
    arr[i] = Array(m);
  }
  for (y = 0; y < m; y++) {
    arr[0][y] = 1;
  }
  for (x = 0; x < n; x++) {
    arr[x][0] = 1;
  }
  for (i = 1; i < n; i++) {
    for (j = 1; j < m; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[n - 1][m - 1]
}

/**
 * @param {number} num
 * @return {number[]}
 */
// 所以状态转移方程为：dp[i]=dp[i>>1]+1 (i为奇数)，dp[i]=dp[i>>1]（i为偶数）。
var countBits = function (num) {
  let ans = []
  for (let i = 0; i <= num; ++i) {
    ans[i] = i
    ans[i] = ans[i >> 1] + (i & 1); // x / 2 is x >> 1 and x % 2 is x & 1
  }
  return ans;
}

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let sum = 0
  while (n != 0) {
    n &= (n - 1)
    sum++
  }
  return sum;
};

// 打家劫舍
/**
 * @param {number[]} nums
 * @return {number}
 */
// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。

// 分析：每一家存在偷和不偷的状态
// fn(3) = p[3] + fn(3-2)  //偷
// fn(3) = fn(3-1)  //不偷
// fn(i) = Math.max(p[i] + fn(i-2), fn(i-1)) //状态转移方程,sum最大价值, max求最大价值, p[i]代表当前的价值
// 选择 f(–1) = f(0) = 0 为初始情况，这将极大地简化代码。
// 
var rob = function (nums) {
  let pre1 = 0,
    pre2 = 0;
  nums.forEach(d => {
    let temp = pre1
    pre1 = Math.max(pre2 + d, pre1);
    pre2 = temp
  })
  return pre1
};

//买卖股票的最佳时机(贪心算法吧？)
// [7, 1, 5, 3, 6, 4] 不断进行交易，取最大值
// 状态转移方程：min -> 要有个最小值
//     max(i) = Math.max(p[i]-min, max(i-1)) 
// 分析状态转移方程：股票的最佳卖时机是前一天的最大值max(i-1) 和 当前值p[i]减掉最小值之间取大
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0,
    min = prices[0]; // 默认买入最小值
  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] > prices[i - 1]) { //默认最大值
      max = Math.max(max, prices[i] - min) //默认最大值
    } else {
      min = Math.min(min, prices[i]) //一直找最小值
    }
  }
  return max
};

// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

// 示例 2：
// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  //不管是双核还是单核，都转化成单核         
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
    arr.push("#");
  }
  s = arr;
  s.unshift("#");
  //中心对称方式查找
  let max = '';
  let len = s.length; //s == arr
  for (let i = 0; i < len; i++) {
    let str = core(s, i - 1, i + 1);
    if (max.length < str.length) {
      max = str
    }
  }
  //实现中心对称查找
  function core(s, l, r) {
    while (s[l] && s[r] && s[l] == s[r]) {
      l = l - 1;
      r = r + 1;
    }
    return s.slice(l + 1, r);
  }
  //去除附加字符后的结果返回
  return max.join("#").replace(/#/g, "");

};

//动态规划怎么做？
var longestPalindrome = function (s) {
  let n = s.length();
  let res = "";
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (s.charAt(i) == s.charAt(j) && (i - j <= 2 || dp[j + 1][i - 1]))
        dp[j][i] = true;
      if (dp[j][i] && (i - j + 1 > res.length())) {
        res = s.substring(j, i + 1);
      }
    }
  }
  return res;
}

// 先对传入的数组从0位一直到N位每一位之前的和求出。
// 当计算i 至 j的和时，只需要把 用 j前面(包含 j )的和 减去 i前面(不包含 i )的和即可。
//  [1, 2, 3, 4] 
//0  1  3  6  10
// 传 2，3
//0  1  3  6  10 -> 10 - 3 = 7
// sumrange（i，j）=sum[j+1]−sum[i] 状态转移方程
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let len = nums.length + 1
  this.sumArr = Array(len)
  sumArr[0] = 0
  for (let i = 0; i < len - 1; i++) {
    sumArr[i + 1] = sumArr[i] + nums[i]
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sumArr[j + 1] - this.sumArr[i]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var isSubsequence = function (s, t) {
  if (!s) return true
  let index = 0 // t 是不是s的子串 #392
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[index]) {
      if (index === s.length - 1) {
        return true;
      }
      index++;
    }
  }
  return false;
};

// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。
// 示例:
// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// [
//   [1,4,5],
//   [2,7,6],
//   [6,8,7]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。
// 分析：一行，一列的特殊情况是边界。当是一个矩阵的时候，等于上边和左边的最小值
// sum(i, j) = min(p[i,j] + p[i-1,j], p[i,j] + p[i,j-1]) // i,j > 2
// sum(1, 1) = p[i, j]
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let r = grid.length //行
  let c = grid[0].length //列
  for (let i = 1; i < c; i++) { //第一行
    grid[0][i] = grid[0][i] + grid[0][i - 1]
  }
  for (let i = 1; i < r; i++) { //第一列
    grid[i][0] = grid[i][0] + grid[i - 1][0]
  }
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      grid[i][j] = Math.min(grid[i - 1][j] + grid[i][j], grid[i][j - 1] + grid[i][j])
    }
  }
  return grid[r - 1][c - 1]
};

// 91. 解码方法
// 一条包含字母 A-Z 的消息通过以下方式进行了编码：
// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26

// 示例 2:
// 输入: "226"
// 输出: 3
// 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
// 分析： 和之前刷的零钱兑换很像，底层是个01背包问题：物品有两种规格，要么一个数字，要么满足要求的两个数字。
// 运用标准的动态规划即可：
// 建立动态规划数组dp，dp[i]用于记录字符串至第i-1位前的解码方法的总数。
// 依次扫描数字，当前数字不为0时，dp[i] += dp[i-1] 表示当前组合数量包括前一位数字前的组合总数；
// 当前数字与前一位组合的数字处于10-26时，dp[i] += dp[i-2] 表示当前组合数量包括前两位数字前的组合总数。
// 最后只需要返回dp[s.length()]即可。
// 有个tip是当两位数算得0时，说明字符串出现连续两个0，此时可以直接返回0。
// 因为"00"所在的字符串不存在解码方式。    
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let dp = Array(s.length + 1).fill(0)
  dp[0] = 1
  for (let i = 1, len = s.length + 1; i < len; i++) {
    let a = s[i - 1]
    if (a != 0) {
      dp[i] += dp[i - 1]
    }
    if (i > 1) {
      let b = s[i - 2] + s[i - 1]
      if (b == 0) { //00 不能编码出来，提前剪枝
        return 0
      }
      if (b > 9 && b < 27) {
        dp[i] += dp[i - 2]
      }
    }
  }
  return dp[s.length]
};

//大神解法
var numDecodings = function (s) {
  if (s[0] == '0') return 0;
  let pre = 1,
    curr = 1; //dp[-1] = dp[0] = 1
  for (let i = 1, len = s.length; i < len; i++) {
    let tmp = curr;
    if (s[i] == '0') //当前位是0
      if (s[i - 1] == '1' || s[i - 1] == '2') curr = pre; //只有一个是0，有效次数是前一位的结果
      else return 0; // 前一位也是0，双0直接中断
    else if (s[i - 1] == '1' || (s[i - 1] == '2' && s[i] >= '1' && s[i] <= '6')) // 11-26
      curr = curr + pre;
    pre = tmp;
  }
  return curr;
}
// 91. 解码方法
// 一条包含字母 A-Z 的消息通过以下方式进行了编码：
// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// 分析：s[0] = 0, 无法编码, 总数为t[i]
//       s[i] = 0, t[i] = t[i-1] , 否则（11-26） t[i] = t[i-1] + t[i-2] // 111 -> 1,1,1; 11,1; 1,11 
// 所以，s[i]的总次数有可能是前一次的，也有可能是前两次的总和，但是要注意00两次0的情况，也无法编码
var numDecodings = function (s) {
  if (s[0] == '0') return 0;
  let dp = Array(s.length + 1).fill(0);
  dp[0] = dp[1] = 1
  for (let i = 2, len = s.length; i <= len; i++) {
    if (s[i - 1] != '0') { //说明可以单独编码，加前一个dp[i-1]
      dp[i] += dp[i - 1]
    }
    if (s[i - 2] == '1' || s[i - 2] == '2' && s[i - 1] < 7) { //s[i-2] + s[i-1]合法，加dp[i-2]
      dp[i] += dp[i - 2]
    }
  }
  return dp[s.length]
}
// 内存优化？
var numDecodings = function (s) {
  if (s[0] == '0') return 0;
  let pre = 1,
    curr = 1,
    temp = 0; //dp[-1] = dp[0] = 1
  for (let i = 1, len = s.length; i < len; i++) {
    tmp = curr;
    if (s[i] == '0') //当前位是0
      if (s[i - 1] == '1' || s[i - 1] == '2') curr = pre; //只有一个是0，有效次数是前一位的结果
      else return 0; // 前一位也是0，双0直接中断
    else if (s[i - 1] == '1' || (s[i - 1] == '2' && s[i] > 0 && s[i] < 7)) // 11-26
      curr = curr + pre;
    pre = tmp;
  }
  return curr;
}
// 最小路径和

// 整体思路：
// 每一层的值加上上一层的值中最小值，最后取最后一层的最小值就好了
// 例如
//    [2],
//   [3,4],
//  [6,5,7],
// [4,1,8,3]
// ==========
//       [2],
//      [5, 6],
//   [11, 10, 13],
//  [15, 11, 18, 16]
// 第二层就是[5,6]
// 第三层就是[11, 10, 13], 第二个10 是因为上一层5<6,所以5+5
// 第四层就是[15, 11, 18, 16]
// 最短就是11了
var minimumTotal = function (triangle) {
  for (let i = 1, len = triangle.length; i < len; i++) {
    triangle[i][0] += triangle[i - 1][0] //每一行的第一个
    triangle[i][i] += triangle[i - 1][i - 1] //每一行的最后一个
  }
  //row - 1 * low - 2
  for (let i = 1, len = triangle.length; i < len; i++) { //第二行开始
    for (let j = 1, len1 = triangle[i].length; j < len1 - 1; j++) { // 只需要增加计算除了第一个和最后一个
      triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1])
    }
  }
  return Math.min(...triangle.pop())
};

// 优化，反过来求，往上堆积木，只是写法比较优雅，实际性能没上面的好
var minimumTotal = function (triangle) {
  //row - 1 * low
  for (let i = triangle.length - 2; i >= 0; i--) { //倒数第二行开始求
    for (let j = 0, len = triangle[i].length; j < len; j++) { // 从0开始算
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
  }
  return triangle[0][0]
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//经典的01背包问题！！！
var wordBreak = function (s, wordDict) {
  let map = {}
  //构建字典map
  for (let i = 0, len = wordDict.length; i < len; i++) {
    if (!map[wordDict[i]]) {
      map[wordDict[i]] = wordDict[i]
    }
  }
  let len = s.length
  let dp = Array(len + 1).fill(false) //默认全为false
  dp[0] = true // s不取的时候 true
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      let w = s.substring(j, i)
      if (dp[j] && map[w]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len]
};

// 打家劫舍II 还是经典的0-1背包问题变种
// [1, 2, 3, 1]
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 2) {
    return nums[0] || 0
  }

  function getRob(nums) {
    let len = nums.length
    if (len == 0) {
      return 0
    }
    var dp = Array(len).fill(0)
    dp[0] = nums[0]
    dp[1] = nums[0] > nums[1] ? nums[0] : nums[1]
    for (let i = 2; i < len; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[len - 1]
  };
  let arr = nums.slice(0, nums.length - 1)
  let arr2 = nums.slice(1)
  let a = getRob(arr)
  let b = getRob(arr2)
  console.log(arr, arr2)
  return Math.max(a, b)
};

//优化
var rob = function (nums) {
  if (nums.length < 3) {
    if (nums.length == 2) {
      return Math.max(nums[0], nums[1])
    }
    return nums[0] || 0
  }

  function getRob(nums) {
    let len = nums.length
    let pre = nums[0]
    let cur = nums[0] > nums[1] ? nums[0] : nums[1]
    for (let i = 2; i < len; i++) {
      let temp = cur
      cur = Math.max(cur, pre + nums[i])
      pre = temp
    }
    return cur
  };
  let a = getRob(nums.slice(0, nums.length - 1))
  let b = getRob(nums.slice(1))
  return Math.max(a, b)
};

// rob([1, 2, 1, 1])

// 最大正方形
/**
 * @param {character[][]} matrix
 * @return {number}
 * 动态规划问题。设二维数组dp[m][n]，其中dp[i][j]表示以坐标(i,j)为右下角元素的最大正方形的边长。

通过观察我们可以看出当前位置的最大正方形边长为上，左，左上三个位置最大正方形边长的最小值+1。（必须这三个正方形同时满足&&该位置matrix[i][j]==1 的条件下，最大边长）

得到动态规划方程：
如果 matrix[i][j] == 1

dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
否则

dp[i][j] = 0
https://leetcode-cn.com/problems/maximal-square/solution/dong-tai-gui-hua-c-by-zhengjingwei/
 */
var maximalSquare = function (matrix) {
  let r = matrix.length
  let c = matrix[0].length
  dp = Array(r)
  for (let i = 0; i < r; i++) {
    dp[i] = Array(c).fill(0)
  }
  for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= c; j++) {
      if (matrix[i][j] == 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
    }
  }
  return dp[r - 1][c] * dp[r - 1][c]
};

// 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。
/**
 * @param {number[]} nums
 * @return {number}
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 */

var maxProduct = function (nums) {
  let max = Number.MIN_SAFE_INTEGER,
    imax = 1,
    imin = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      let tmp = imax;
      imax = imin;
      imin = tmp;
    }
    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);

    max = Math.max(max, imax);
  }
  return max;
}

// 编写一个程序，找出第 n 个丑数。

// 丑数就是只包含质因数 2, 3, 5 的正整数。

// 示例:

// 输入: n = 10 (第十个丑数)
// 输出: 12
// 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
// 丑数就是只包含因数2,3,5的正整数，并且后面的丑数必然是前面的丑数通过*2,3,5来的，
// 我们需要做的就是将后面的丑数进行排序，我们用三个指针分别代表*2，*3，*5的index
// 例如已有[1],分别乘2,3,5，得到的丑数中最小的是2，则将*2的指针+1

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let dp = [1]
  let i2 = i3 = i5 = 0 //三个指针,为什么要用三个指针呢？因为后面的数总跟前面的数有关系，要单独记录 *2 *3 *5 的
  for (let i = 1; i < n; i++) {
    let temp = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5)
    if (temp == dp[i2] * 2)
      i2++
    if (temp == dp[i3] * 3)
      i3++
    if (temp == dp[i5] * 5)
      i5++
    dp.push(temp)
  }
  return dp[n - 1]
};

// 完全平方数
// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

// 背包容量为n, 共有sqrtFloor(n)件商品，每件商品体积为其数值的平方，i.e., 
// 当n=10， 有3件商品分别为 (1,2,3)， 体积分别为(1,4,9)。
// 可多次取商品，找到装满背包时所需商品数量的最小值。
// dp[i] = min(dp[i], dp[i-j*j]+1) 状态转移方程

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let m = sqrtFloor(n)
  let dp = Array(n + 1).fill(Number.MAX_VALUE)
  dp[0] = 0
  for (let i = 1; i <= m; i++) { //物品个数
    for (let j = i * i; j <= n; j++) { //背包容量
      dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
    }
  }
  return dp[n]
};

//求n的平方数个数
function sqrtFloor(n) {
  let floor = 1;
  while (n > floor * floor) {
    floor += 1;
  }
  return floor;
}

// 子序列的问题->动态规划。

// 使用数组 cell 保存每步子问题的最优解。
// cell[i] 代表含第 i 个元素的最长上升子序列的长度。
// 求解 cell[i] 时，向前遍历找出比 i 元素小的元素 j，令 cell[i] 为 max（cell[i],cell[j]+1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = nums.length
  if (len < 1) return 0
  let dp = Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= i; j++) { //比nums[i] 前面小的有多少个数
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  // console.log(dp)
  return Math.max(...dp)
};

// lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  if (row1 == row2 && col1 == col2) {
    sum = this.matrix[row1][col1]
    return sum;
  }
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      sum += this.matrix[i][j]
    }
  }
  return sum
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

//  零钱兑换
// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3 
// 解释: 11 = 5 + 5 + 1
//   0 1 2 3 4 5 6 7 8 9 10 11
// 1 / 1 2 3 4 5 6 7 8 9 10 11
// 2 / 1 1 2                 6 
// 5 / 1 1                   3
// 动态转移方程
// f(x) = min(f(x-1) + 1, f(x-2) + 1, f(x-5) + 1)
// 简化：
// dp[j] = min(dp[j], dp[j - coins[i]] + 1)
// 初始条件是dp[0] = 0
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let n = coins.length
  let dp = Array(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) { //金额
    dp[i] = Number.MAX_VALUE //假设拼不出来
    for (let j = 0; j < n; j++) { //枚举银币找出结果
      if (i >= coins[j] && dp[i - coins[j]] != Number.MAX_VALUE) { //关键点，dp[i - coins[j]] != Number.MAX_VALUE，取了这个银币之后还是正无穷，说明不可以
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  console.log(dp)
  return dp[amount] == Number.MAX_VALUE ? -1 : dp[amount]
};
// coinChange([488, 445, 1, 68, 437, 155], 1551)

//优化？ 其实就是完全背包问题 dp[j] = min(dp[j], dp[j - coins[i]] + 1)
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Number.MAX_VALUE)
  dp[0] = 0
  for (let i = 0, n = coins.length; i < n; i++) {
    for (let j = coins[i]; j <= amount; j++) { //j = coins[i], 要大于等于这个银币才能决定取不取
      //关键点，dp[i - coins[j]] != Number.MAX_VALUE，取了这个银币之后还是正无穷，说明不可以取这个银币，不然不能组成找零钱
      if (dp[j - coins[i]] != Number.MAX_VALUE) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
      }
    }
  }
  return dp[amount] == Number.MAX_VALUE ? -1 : dp[amount]
};
/**
 * 以DP做一个总结
 * 一、确定状态
 *    1.最后一步（最优策略中使用的最后一枚银币coins[i]）
 *    2.化为子问题（最少的银币拼出更小的面值amount - coins[i]）
 * 二、转移方程(根据amount保存出最少银币)
 *    1.f(x) = min(f(x-1) + 1, f(x-2) + 1, f(x-5) + 1)，因为不知道最后一枚银币是多少
 *    2.f(x) = min(dp[x], dp[x - coins[i]] + 1)
 * 三、初始条件和边界
 *    1.dp[0] = 0, 如果不能拼出y, f[y] = 正无穷
 * 四、计算顺序
 *    1.f[0],f[1],f[2].....
 * 所以其实dp就是消除冗余加速计算。
 */



/**
 * 分两种情况，直达，非直达（k-1）站内有效
 * f(src, dst, k) = min(f(src, dst-1, k-1), f(src, dst, 0))
 * 如果 k = 0, 那么 f(src, dst, k) = min( f(src, dst, 0) )
 * 如果k 不等于0 f(src, dst, k) = min(f(src, dst-1, k-1), f(src, dst, 0))
 * 那么状态转移方程就是 f(src, dst, k) = min(f(src, dst-1, k-1), f(src, dst, 0))
 * f(src, dst-1, k-1) 为子结构
 * 边界即为 0 的时候
 * 那么 dp[i][j] 表述i站内到达目的地的最小价值
 * ......
 */
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
  let cheap = (src, dst, k) => {
    let pre = flights.filter(d => d[1] === dst)
    let min = Math.min.apply(null, pre.map(d => {
      if (d[0] === src && k > -1) { //找到了
        return d[2]
      } else if (k === 0 && d[0] !== src) { //找了k站都没找到
        return Number.MAX_VALUE
      } else {
        return d[2] + cheap(src, d[0], k - 1) //继续以d[0]为终点站，找k-1站内可达
      }
    }))
    return min
  }
  let ret = cheap(src, dst, K)

  return (ret == Number.MAX_VALUE) || (ret == Infinity) ? -1 : ret
};
//dp[k][dst] = min(dp[k][dst], )

var findCheapestPrice = function (n, flights, src, dst, K) {
  //dp[i][k]表示从src至多经过k站到达i的最少费用
  let dp = Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = Array(K + 2).fill(Number.MAX_VALUE)
  }
  //初始化 src 到 src的费用为0
  for (let k = 0; k <= K + 1; ++k) {
    dp[src][k] = 0;
  }
  //开始动态规划
  for (let k = 1; k <= K + 1; ++k) { //K次中转
    for (let i = 0; i < flights.length; i++) { //航班
      let flight = flights[i]
      //如果从src至多经过k - 1站可达flight[0]
      if (dp[flight[0]][k - 1] != Number.MAX_VALUE) {
        //更新从src至多经过k站到达flight[1]
        dp[flight[1]][k] = Math.min(dp[flight[1]][k], dp[flight[0]][k - 1] + flight[2]);
      }
    }
  }
  return dp[dst][K + 1] == Number.MAX_VALUE ? -1 : dp[dst][K + 1];
}

// DP，有几次 K，就需要做几次循环，举例第二轮循环的所算的所有参数一定都是参与了一次中转的，
// 第三轮的则一定是参与了两次中转的，以此类推。

// 思路： 采用动态规划来做，维护一个二维数组dp[k][i]，其中dp[k][i]意思是中转k次到目的地为i的费用是多少。
// 1. 初始化dp[0][src]=0；
// 2. 则递推公式为：中转k次到达目的地i的费用等于= min(其他航线中转k次到达目的地，此次航线中转k-1次到达目的地i的前一站的费用+目的地i的前一站飞到目的地的费用)。

var findCheapestPrice = function (n, flights, src, dst, K) {
  let dp = new Array(n).fill(Infinity)
  dp[src] = 0 //自己到自己，0
  for (let i = 0; i < K + 1; i++) { //中转
    const arr = [].concat(dp)
    for (let i = 0; i < flights.length; i++) { //航班
      let iDest = flights[i][1] //目的地
      let iSrc = flights[i][0] //起始点
      let iCost = flights[i][2] //消费
      //    消费 =          目的地        起始点 + 消费价格
      arr[iDest] = Math.min(arr[iDest], dp[iSrc] + iCost)
    }
    dp = arr.concat([])
  }
  return dp[dst] === Infinity ? -1 : dp[dst]
};
var flights = [
  [0, 1, 100],
  [1, 2, 100],
  [0, 2, 500]
]

/**
 *  k/n     0     1      2     3     三个航班
 *       0  
 *       1
 * 
 * 
 * 
 */

/** 1143 最长公共子序列（不要求连续），DP解法
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  //dp[i][j], 代表text1第i个，text1第j个，
  //状态转移方程：
  let len = text1.length
  let len2 = text2.length
  let dp = Array(len).fill(0)
  dp.forEach((d, index, arr) => {
    arr[index] = Array(len2).fill(0)
  })
  //边界
  if (text1[0] == text2[0]) {
    dp[0][0] = 1
  }
  //第一行
  for (let i = 1; i < len2; i++) {
    if (text2[i] == text1[0]) {
      dp[0][i] = 1
    } else {
      dp[0][i] = dp[0][i - 1]
    }
  }
  // 第一列
  for (let i = 1; i < len; i++) {
    if (text1[i] == text2[0]) {
      dp[i][0] = 1
    } else {
      dp[i][0] = dp[i - 1][0]
    }
  }
  // 状态转移方程：dp[i][j], 表示第i行第j列
  // 相等 dp[i - 1][j - 1] + 1
  // 不相等 Math.max(dp[i][j-1], dp[i-1][j])
  for (let i = 1; i < len; i++) {
    for (let j = 1; j < len2; j++) {
      if (text1[i] == text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }
  console.log(dp)
  return dp[len - 1][len2 - 1]
};

// longestCommonSubsequence("abcde", "ace")

/** 746
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let len = cost.length
  if (len < 3) {
    return Math.min(cost)
  }
  let dp = [cost[0], cost[1]]
  //第三个数开始
  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + dp[i]
  }
  return dp[len - 1]
};

/** 718
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  // 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
  // 输入:
  // A: [1,2,3,2,1]
  // B: [3,2,1,4,7]
  // 输出: 3
  // 解释: 
  // 长度最长的公共子数组是 [3, 2, 1]。
  // 边界：反过来推，不然边界不好处理
  // 状态转移方程：dp[i][j] = dp[i - 1][j - 1] + 1;, A[i] == B[j]
  //              dp[i][j] = 0,  A[i] != B[j]
  // 求对角线的最大值
  let aLen = A.length;
  let bLen = B.length;
  let res = 0
  let dp = Array(aLen).fill(0);
  dp.forEach((d, idx, arr) => {
    arr[idx] = Array(bLen).fill(0)
  })
  for (let i = 0; i < aLen; i++) {
    for (let j = 0; j < bLen; j++) {
      if (A[j] == B[i]) {
        if (i == 0 || j == 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        }
      }
      res = Math.max(dp[i][j], res);
    }
  }
  return res
};
// findLength([0, 0, 0, 0, 1], [1, 0, 0, 0, 0])

/** 53
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0];
  let sum = 0;
  for (const num of nums) { //[-2, 1, -3, 4, -1, 2, 1, -5, 4],
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum); // -2 
  }
  return ans;
};

// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

// 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
// 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
// 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
// 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果

/** 211
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 状态转移方程是
  // dp[i][j] = min(dp[i -1 ][j], dp[i][j - 1], dp[i - 1][j - 1])
  if (matrix.length < 1) return 0;
  if (matrix[0].length < 1) return 0;
  if (matrix.length == 1 && matrix[0].length == 1) return matrix[0][0];
  let row = matrix.length;
  let col = matrix[0].length;
  let res = 0
  // 一行
  if (matrix.length < 2) return Math.max(...matrix[0]);
  // 一列
  if (matrix[0].length < 2) {
    for (let i = 0; i < row; i++) {
      if (matrix[i][0] == 1) {
        return 1
      }
    }
    return 0
  }
  let tag = 0
  let dp = getArrFillTag(row, col, 0)
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] == '1'){
        tag = 1
      }
      dp[i][j] = +matrix[i][j];
    }
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] == '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        res = Math.max(res, dp[i][j])
      }
    }
  }
  return tag === 1 && res > tag ? res : tag
};

//二维数组填满某个值
function getArrFillTag(row = 1, col = 1, tag = 0) {
  let res = Array(row).fill(tag)
  res.forEach((d, i, arr) => {
    arr[i] = Array(col).fill(tag)
  })
  return res;
}

/** 300 最长上升子序列
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length
    let dp = Array(len).fill(1)
    for(let i = 1; i < len; i++){
      for(let j = 0; j <= i; j++){
        if(nums[i] > nums[j]){
          dp[i] = Math.max(dp[j], dp[j] + 1)
        }
      }
    }
    return Math.max(...dp)
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
var longestUnivaluePath = function(root) {
    let res = 0
    helper(root);
    function helper(root){
      if(!root) return 0;
      let left = helper(root.left);
      let right = helper(root.right);
      if(root.left && root.left.val == root.val){
        left++
      }
      if(root.right && root.right.val == root.val){
        right++
      }
      

      return Math.max(right, left)
    }
    return res
};

