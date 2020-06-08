### 前端到底怎么学数据结构和算法？
数据结构和算法重要吗？我觉得**程序=数据结构+算法**至今都不过时。
数据结构和算法这么多，我们没有必要全都学一遍。
做一个全方面的了解，只需要把基础的算法和数据结构学会，面对更难的数据结构和算法，也不至于手忙脚乱。

### 数据结构和算法到底什么关系？
每个人的境界不同，理解也不一样。
这里我的理解是，**数据结构就像造房子的材料，算法好比建筑师设计的图纸**。
二者缺一不可，都是相辅相成的；材料脱离了设计稿，就是一堆废料。
设计图纸没有材料的加持，就是一张废纸。
如何评价房子优质？材料用得少，质量优质，就是一个好房子。
这里的材料，其实就是指**空间复杂度**；质量优质，很明显是指**时间复杂度**了
ps：底层码农搬砖，上层大佬设计。是不是极度的类似？

### 数据结构的两个关系
就像造房子，你不知道砖头是什么材质的，随便给你个豆腐你敢用吗？
1. 存储结构（砖头什么材质）
- 顺序存储，数组，区域连续存放的
- 链式存储，链表，不一定是连续的，数据间首尾有前后关联关系
- 索引存储，B+树，常用于数据库的索引，简单理解成一本书的索引目录即可
- 散列存储，哈希表，顺序和逻辑上都不存在顺序关系，通过散列函数访问
2. 逻辑结构（在设计稿上的具体实现） 
- 有线性规律的砖头，线性结构，常见的线性结构有：栈，队列，链表，数组。(首尾相接的)
- 没有线性规律的砖头，非线性结构，常见的线性结构有：树，图。（非首尾相接的）

### 时间复杂度大小关系
必须记住的常用时间复杂度关系，数学基础达标的小伙伴记住并不难。
- O(1) < O(log(n)) < O(n) < O(nlog(n)) < O(n^2) < O(2^n) < O(n!)

## 数据结构
### 数组
1. 特点
- 区域连续存放，可用地址寻址公式快速算出存放位置
2. 优点
- 所需能存很少，访问速度快 O（1）
3. 缺点
- 删除有可能会挪动整个数组，不稳定，较慢。O（n）
- 会有内存大小的限制
4. js下的数组
- JSArray 是继承自 JSObject 的，所以在 JavaScript 中，数组可以是一个特殊的对象;
- 内部是以 key-value 形式存储数据，所以 JavaScript 中的数组可以存放不同类型的值。
- js的数据可以动态扩容，有两种方式存储，即快数组和慢数组。
- 参考链接：https://github.com/sisterAn/JavaScript-Algorithms/issues/2

### 链表
1. 特点
- 以单链表为例，多消耗一个next指针，指向下一个节点
2. 优点
- 不用区域连续，删除不需要挪动整个链表，删除快 O（1）
3. 缺点
- 占用的内存比数组大，访问慢，没有具体的寻址公式 O（n）
4. 注意点
- 重点掌握链表的基本操作，特别是反转链表
- 反转链表一定要先抽象思考好整体，再写细节
- 把链表抽象成节点，用脑子里想好的图来写代码
```js
//翻转 [a, b)，不包括 b
const revese = (a, b) => {
   let pre = null, cur = a, nex = a;
   while(cur != b){
     // 先保存好后面的，以免链表断了
     nex = cur.next
     // 开始反转，当前的指向前一个
     cur.next = pre
     // 继续翻转下一个，pre会变成新头
     pre = cur
     cur = nex
   }
   return pre
}
```
5. 常用的解题技巧，**快慢指针**
- 判断链表有没有环
- 两个链表的第一个相交点

### 栈
1. 特点
- 先进后出，非常重要
2. 单调栈
- 抽象成排队问题，非常适合求第一个大/小的问题
- 单调递增，当前身高只能看到后面的高个子
- 单调递减，当前身高只能看到后面的矮个子
3. 经典题目
- 找出第一个比左右两边都大的元素
- 每日温度
- 接雨水
```js
// 单调栈模板代码，以单调递减为例
// 抽象成排队，找后面的第一个比自己高的
let n = nums.length
let st = []
let res = []
// 倒着看可以避免不知道后面什么情况
for(let i = n - 1; i < n; i--){
  // 矮个子走开，我不需要你，当前是 nums[i]
  // 只需要看到第一个比自己高的人
  while(st.length && nums[i] >= st[st.length - 1]){
    st.pop()
  }
  // 取第一个比自己高的，没有取-1
  res.push(st.length ? st[st.length - 1] : -1)
  // 进去排队
  st.push(nums[i])
}
  //注意是从后往前遍历的喔 
return res.reverse()
```
5. 解题技巧，加首尾哨兵

### 队列
1. 特点，先进先出；非常重要
2. 队列，就类比成食堂排队打饭即可
- 扩展的有双端队列，队头、队尾都可以进队出队
3. 经典题目
```js
// 翻转字符串，
let str = "the sky is blue" // -> "blue is sky the"
```

### 散列表
1. 散列表（哈希表/hash表）
- 散列表其实也是日常生活中最常见的，就好比上课老师点的你学号。你的学号映射到你本人是谁。
- 推荐阅读：https://github.com/sisterAn/JavaScript-Algorithms/issues/49
2. 散列函数
- 给定一个关键字key，然后根据散列函数计算处理，得到关键字在散列表中的地址。这就是散列函数的作用
- 得到关键字在散列表中的地址，就可以根据地址来索引得到值。
3. 散列表和Object 对象的key-value键值对有什么区别呢？
- 散列表在存储值的时候，也是用key-value键值对的形式存储值的。
- 但是这两者有着本质的区别，不要搞混了，散列表是可以根据**拉链法，开地址法**这样手段来避免掉重复值问题，即不覆盖。
- 具体的key-value键值对储存是会覆盖值的。初学者千万不要搞混了。
- 散列表如果不考虑空间，是最好的数据结构，增删查改的性能都很好。
4. 如何设计散列函数
- 散列函数目的是计算关键字在散列表中的地址唯一。
5. 冲突解决
- 在散列里，冲突是不可避免的。那怎样解决冲突呢？
- 开放地址法（也叫开放寻址法）：实际上就是当需要存储值时，对Key哈希之后，发现这个地址已经有值了，这时该怎么办？不能放在这个地址，不然之前的映射会被覆盖。这时对计算出来的地址进行一个探测再哈希，比如往后移动一个地址，如果没人占用，就用这个地址。如果超过最大长度，则可以对总长度取余。这里移动的地址是产生冲突时的增列序量。
- 链地址法：链地址法其实就是对Key通过哈希之后落在同一个地址上的值，做一个链表。
- 再哈希法：在产生冲突之后，使用关键字的其他部分继续计算地址，如果还是有冲突，则继续使用其他部分再计算地址。这种方式的缺点是时间增加了。
- 建立一个公共溢出区：这种方式是建立一个公共溢出区，当地址存在冲突时，把新的地址放在公共溢出区里。
6. 散列表表示形式
-  可以用个线性的数组存储链表，邻接链表
7. 经典题目
- 散列表应用的经典题目很多，这里就不列举了。
- ES6 中的Map/Set这两个结构就是散列表储存的，用的是**邻接链表**。

### 二叉树
1. 特性
- 最多仅有两个子节点
2. 二叉树的扩展
- 平衡二叉树：每个节点的左右子树的高度相差不能大于1，也叫平衡因子。了解四个旋转操作把树拉平
- 满二叉树：非叶子节点都有左右子树，叶子节点从左往右占满，不留空白。
- 完全二叉树：在满二叉树的基础上，叶子节点层右边可以空白，左边必须占满。
- 二叉搜索树(BST)：每个节点的值大于其任意左侧子节点的值，小于其任意右节点的值。平衡的二叉搜索树性能都是log n
3. 四个遍历方式
- 前序遍历
- 中序遍历
- 后续遍历
- 层序遍历（BFS，后面图扩展）
```js
// 对于这三个遍历方式，递归实现很简单，这里用一种0/1标记法模拟栈，1表示访问过
// 这套模板可以AC三道题目
function Traversal(root){
  let res = []
  let stack = [[root, 0]]
  while(stack.length){
    let [node, color] = stack.pop()
    if(node == null){
      continue
    }
    // 没有访问过
    if(!color){
      // 因为用的是栈，先进后出
      // stack.push([node, 1])，后序遍历
      stack.push([node.right, 0])
      // stack.push([node, 1])，中序遍历
      stack.push([node.left, 0])
      // stack.push([node, 1])，前序遍历
    }else{
      res.push(node.val)
    }
  }
  return res
}
```
5. 二叉树特别适合递归算法，本质上，递归算法得状态树就是一个N叉树

### 堆
1. 特性
- 就是一个完全二叉树，由于它的特性可以利用数组来存储
- 完全二叉树的一些公式
```js
// 假设当前的节点树为 n，i为数组的下标
// let parentNode = (i - 1) >> 1，>> 位运算不用向下取整
// let leftNode = 2 * i + 1
// let rightNode = 2 * i + 2
// 构建堆，堆化，这里用一种比较简洁的heapify
// heapify：把当前的节点当成一棵树，计算出左右子节点，如果根最大就是大根堆，如果根最小，就是小根堆
const heapify = (n, i, arr) => {
  // 递归出口
  if(i >= n){
    return
  }
  let max = i
  let left = i * 2 + 1
  let right = i * 2 + 2
  //比较左子树
  if(left < n && arr[left] > arr[max]){
    max = left
  }
  // 比较右子树
  if(right < n && arr[right] > arr[max]){
    max = right
  }
  // 说明最大值不是自己
  if(max != i){
    swap(i, max, arr)
    // 被调整过的子树需要继续调整
    heapify(n, max, arr)
  }
}
function swap(i, j, arr){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 这里扩展一下堆排序
// 整体思路：先构建一个大根堆，然后把堆顶和最后一个元素交换，交换了的节点继续 heapify 操作调整即可
const heapSort = (nums) => {
  let n = nums.length
  createMaxHeap(nums, n)
  for(let i = n - 1; i >= 0; i--){
    // 交换两个元素
    swap(0, i, arr)
    // 继续以交换了的做 heapify 调整为大顶堆
    heapify(i, 0, nums)
  }
  return nums
}

function createMaxHeap(nums, n){
  // 数组乱序的，我们就以第一个父节点，从下往上，从右往左做 heapify 即可
  for(let i = (n - 1) >> 1; i >= 0; i--){
    heapify(n, i, nums)
  }
}
// 构建堆的过程是O（n），堆排序是n*log n
```

### 跳表
- 链表的访问太慢了，给链表加一层父级索引，每隔两个节点就用一个父级指针指向
- 经典的时间换空间 

### 图
1. 两个表示方法
- 二维矩阵（内存浪费较多，一般不用）
- 邻接表
```js
var graph = {
  "A": ['B', 'C'],
  "B": ['A', 'C', 'D'],
  "C": ['A', 'B', 'D', 'E'],
  "D": ['B', 'C', 'E', 'F'],
  "E": ['C', 'D'],
  "F": ['D']
}
```
2. 图的两个遍历方式
- BFS，一层层扫，核心：借助队列和哈希
```js
// 这里我们假设A点是起始点，用一个Set表示节点已经访问了
function BFS(s = 'A') {
  let graph = {
  "A": ['B', 'C'],
  "B": ['A', 'C', 'D'],
  "C": ['A', 'B', 'D', 'E'],
  "D": ['B', 'C', 'E', 'F'],
  "E": ['C', 'D'],
  "F": ['D']
  }
  let res = []
  let queue = [s]
  let hash = new Set(s) //用于存放已经被访问过的节点
  while(queue.length){
    let curNode = queue.shift()
    let childList = graph[curNode]
    for(let i = 0; i < childList.length; i++){
      let child = childList[i]
      if(!hash.has(child)){
        hash.add(child)
        queue.push(child)
      }
    }
    res.push(curNode)
  }
  return res
}
```
- BFS能得到一颗层级树，这样就可以实现一个点到所有点的最短路径
```js
// 基于上面代码增加一个parent树即可
function BFS(s = 'A') {
  let graph = {
  "A": ['B', 'C'],
  "B": ['A', 'C', 'D'],
  "C": ['A', 'B', 'D', 'E'],
  "D": ['B', 'C', 'E', 'F'],
  "E": ['C', 'D'],
  "F": ['D']
  }
  let queue = [s]
  let hash = new Set(s) 
  let parent = new Map([[s, null]])
  while(queue.length){
    let curNode = queue.shift()
    let childList = graph[curNode]
    for(let i = 0; i < childList.length; i++){
      let child = childList[i]
      if(!hash.has(child)){
        hash.add(child)
        queue.push(child)
        parent.set(child, curNode)
      }
    }
  }
  return parent
}
```
- DFS，不到尽头不回头，核心：借助队列和哈希
```js
function DFS(s = 'A') {
  let graph = {
  "A": ['B', 'C'],
  "B": ['A', 'C', 'D'],
  "C": ['A', 'B', 'D', 'E'],
  "D": ['B', 'C', 'E', 'F'],
  "E": ['C', 'D'],
  "F": ['D']
  }
  let res = []
  let stack = [s]
  //用于存放已经被访问过的节点
  let hash = new Set(s) 
  while(stack.length){
    let curNode = stack.pop()
    let childList = graph[curNode]
    for(let i = 0; i < childList.length; i++){
      let child = childList[i]
      if(!hash.has(child)){
        hash.add(child)
        stack.push(child)
      }
    }
    res.push(curNode)
  }
  return res
}
```
3. DFS和BFS是最常用的搜索算法；
- 这一部分推荐多刷点leetcode的题，这样才能巩固这两个算法。
- 这两个算法非常的常用和实用

### Trie树


## 基础算法
### 递归，非常的重要

### 排序

### 二分查找

### 搜索

### 哈希算法

### 贪心算法

### 分治算法

### 回溯算法

### 动态规划

### 字符串匹配算法
