## 动态规划三步曲
- 递归(自顶向下) -> 递归（memo） -> 自底向上（dp） 
- 以最小硬币数为例；
### 确定状态
1. 确定状态属于dp中的定海神针
2. 简单来说就是动态规划需要开辟一个cache缓存数组，数组中的每个元素dp[i]或者dp[i][j]代表什么；类似于解数学题中的，X，Y，Z代表什么；一定要很准确；
3. 确定状态需要有两个意识
- 最后一步是什么，就是最后一个解；（最优策略中使用的最后一枚硬币A[k]）
- 化成子问题；（最少的硬币拼出更小的面值27-A[k]）
- tips：一般递归会有什么问题？状态树很大，傻递归，自顶向下，非常适合人脑的思考方式；

### 状态转移方程（数学归纳法）
- 当问题的规模逐渐变大的时候，由逐渐变大的子问题（明确定义好的状态）得到一个数学的关系式。（这也是最难的一点）

### 初始条件和边界
- 确定状态，和明确转移方程无误以后，写代码常常出错是因为初始条件和边界没有定义好
1. 用转移方程算不出来的，但是我又需要它，这就是初始条件；边界是指数组的定义范围，不要越界。
2. 得到初始条件和转移方程就可以写代码了；写的时候要细心观察一些细节。
3. 计算顺序，有的时候是从小到大，有的是从大到小，怎么确定呢？
- 记住一个原则，要用到的状态已经计算出来了，就可以了；
4. 数组开多大？如果要用到0-n，就开n + 1，如果要用到0 -（n-1），就开n
5. 动态规划有什么问题？比如一个二维dp，变量太大，开的内存就会很大，此时并不适合DP；

# 买卖股票系列
- 既然是买卖股票系列问题，那我们先想清买卖股票的状态
1. buy：在 k 次以内，未持有股票，就可以买入; 也可以rest。
2. sell: 持有股票，才能卖出0; 当然也可以rest
3. rest: 不买也不卖。
- 所以我们的状态可以这样定义dp[i][k][0 or 1]
- 在K次的交易内，第i天持有或者未持有股票的最大利润；
- 很显然要求的结果就是 dp[i][k][0]

# 状态转移方程
1. dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
                 max(   选择 rest  ,           选择 sell      )
解释：今天我没有持有股票，有两种可能：
要么是我昨天就没有持有，然后今天选择 rest，所以我今天还是没有持有；
要么是我昨天持有股票，但是今天我 sell 了，所以我今天没有持有股票了。

2. dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
                 max(   选择 rest  ,           选择 buy         )
解释：今天我持有着股票，有两种可能：
要么我昨天就持有着股票，然后今天选择 rest，所以我今天还持有着股票；
要么我昨天本没有持有，但今天我选择 buy，所以今天我就持有股票了。

# 初始条件和边界
dp[-1][k][0] = 0
解释：因为 i 是从 0 开始的，所以 i = -1 意味着还没有开始，这时候的利润当然是 0 。
dp[-1][k][1] = -infinity
解释：还没开始的时候，是不可能持有股票的，用负无穷表示这种不可能。
dp[i][0][0] = 0
解释：因为 k 是从 1 开始的，所以 k = 0 意味着根本不允许交易，这时候利润当然是 0 。
dp[i][0][1] = -infinity
解释：不允许交易的情况下，是不可能持有股票的，用负无穷表示这种不可能。

# 总结状态转移方程 和 base case
```js
// base case：
dp[-1][k][0] = dp[i][0][0] = 0         //还未开始，利润肯定是零
dp[-1][k][1] = dp[i][0][1] = -infinity //还未开始，不可能持有股票

// 状态转移方程：
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
// 接下来根据这个状态转移方程枚举 DP table 即可。
```


