/*
 * @Description:
 * @Autor: hrt
 * @Date: 2019-10-10 08:51:16
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-13 11:07:41
 */
// 图的表示：
// 二维矩阵或者邻接表表示

// 图的遍历：
// 图的遍历就是要找出图中所有的点，一般有以下两种方法

// 深度优先就是（一条路走到黑），从初始点出发，不断向前走，如果碰到死路了，
// 就往回走一步，尝试另一条路，直到发现了目标位置。
// 这种不撞南墙不回头的方法，即使成功也不一定找到一条好路，但好处是需要记住的位置比较少。

// 广度优先就是（一层层搜索），从初始点出发，把所有可能的路径都走一遍，如果里面没有目标位置，
// 则尝试把所有两步能够到的位置都走一遍，看有没有目标位置；如果还不行，则尝试所有三步可以到的位置。
// 这种方法，一定可以找到一条最短路径，但需要记忆的内容实在很多，要量力而行。

// 总结：BFS 适合搜索不带权的最短路径，dijkstra是BFS扩展的一种带权值的最短路径算法。适合带权值的搜索

//实现图
var graph = {
  "A": ['B', 'C'],
  "B": ['A', 'C', 'D'],
  "C": ['A', 'B', 'D', 'E'],
  "D": ['B', 'C', 'E', 'F'],
  "E": ['C', 'D'],
  "F": ['D']
}

function BFS(graph, s) {
  let res = []
  //记录已经遍历过的节点
  let map = new Map()
  //用一个队列
  let queue = [s]
  map.set(s, s)
  while (queue.length) {
    //拿到一个节点
    let node = queue.shift()
    // 拿到节点的子节点们
    let nodeList = graph[node]
    while (nodeList.length) {
      let item = nodeList.shift()
      //不存在，代表没有遍历过
      if (!map.has(item)) {
        queue.push(item)
        map.set(item, item)
      }
    }
    res.push(node)
  }
  return res;
}

function DFS(graph, s) {
  let res = []
  //记录已经遍历过的节点
  let map = new Map()
  let stack = [s]
  map.set(s, s)
  while (stack.length) {
    //拿到一个节点
    let node = stack.pop()
    // 拿到节点的子节点们
    let nodeList = graph[node]
    while (nodeList.length) {
      let item = nodeList.shift()
      if (!map.has(item)) {
        stack.push(item)
        map.set(item, item)
      }
    }
    res.push(node)
  }
  return res;
}

// console.log(BFS(graph, 'A'))

//BFS扩展，用它求到所有节点的最短路径
//bfs能得到一颗层级树，这样就可以实现一个点到所有点的最短路径
function getParent(graph, s) {
  let parent = {}
  let res = []
  //记录已经遍历过的节点
  var map = new Map()
  var queue = []
  map.set(s, s)
  queue.push(s)
  parent[s] = null
  while (queue.length) {
    //拿到一个节点
    let node = queue.shift()
    // 拿到节点的子节点们
    let nodeList = graph[node]
    while (nodeList.length) {
      let item = nodeList.shift()
      if (!map.has(item)) {
        queue.push(item)
        map.set(item, item)
        parent[item] = node
      }
    }
    res.push(node)
  }
  return parent;
}

// BFS扩展算法
// Dijkstra（属于贪心算法）
// 算法描述：
/*
 1.一开始，从出发点到达它之外的所有顶点的已知最短路径为无穷大，到出发点自己的最短路径为0。
   同时要借助一个优先队列，先讲起始点加入优先队列
 
 2.现在，出发点的已知最短路径最小，则从出发点出发（出发点出队），探索与其直连的所有顶点，
   如果路径长度比到该顶点的已知最短路径小，则刷新该顶点的已知最短路径。（同时要把到该点最小值也要加入优先队列）

 3.接着，出发点已经探索过了，从未出发探索过的已知最短路径中选出最小的一个（优先队列里面的），
   探索与其直连的城市，如果到达该城市的路径长度比已知最短路径小，则刷新最短路径

 4.依次类推，遍历，直到优先队列为空

 5.值得注意的是，我们每一步探索过程中的当前出发点的最短路径是确定的了，不会再变了，
   因为它是所有未探索过的已知最短路径中的最小的了，所以不存在从其它地方再加一段路程到达它还会比它更小的情况
 */
// 在BFS的代码上利用优先队列改进（优先队列就是进队的数字是带权的，权限越大就先进队）

var graph1 = { 
  "A": { 'B': 5, 'C': 1 },
  "B": { 'A': 5, 'C': 2, 'D': 1 },
  "C": { 'A': 1, 'B': 2, 'D': 4, 'E': 8 },
  "D": { 'B': 1, 'C': 4, 'E': 3, 'F': 6 },
  "E": { 'C': 8, 'D': 3 },
  "F": { 'D': 6 }
}
function dijkstra(s, t) {
  //记录已经遍历过的节点
  var map = new Map()
  //优先队列（小根堆）
  var queue = []
  //保留任意一点到其它点的最短路径
  var distance = {}
  //已经见过s源点
  map.set(s, s)
  // 带权加入优先队列
  queue.push({ [`${s}`]:0 })
  //初始化地图，除了第一个全部都无限大
  for (key in graph1) {
    distance[key] = Infinity
  }
  //起始点A设为0
  distance[s] = 0
  while (queue.length) {
    //拿到一个节点
    let item = queue.shift()
    let node = Object.keys(item)[0] // A
    // console.log(node)
    // 拿到节点的子节点们
    let keyList = Object.keys(graph1[node]) 
    while (keyList.length) {
      let key = keyList.shift()// B C 
      if (!map.has(key)) { //没有遍历过这个点
        //得到A-B的距离
        let d = graph1[node][key] + distance[node]// A->B = 5 + A
        //如果加上当前的距离小于原来的，更新
        if(d < distance[key]){ //B原来是无限大，5 + 0 = 5
          distance[key] = d
        }
        //优先队列增加
        queue.push({ [`${key}`]:distance[key] }) //B C
        queue.sort((a, b) => {
            let key = Object.keys(a)[0]
            let key1 = Object.keys(b)[0]
            return a[key] - b[key1]
        })
      }
    }
    //计算完就设置为遍历过
    map.set(node, node)
  }
  //返回源点到目标节点的距离
  return distance[t];
}

// console.log(dijkstra('A', 'B'))


/**
 * @param {character[][]} grid
 * @return {number}
 * 广度优先搜索
 */
var numIslands = function (grid) {
  let count = 0
  //深度优先搜索
  let dfs = function (grid, r, c) {
    let nr = grid.length
    let nc = grid[0].length
    grid[r][c] = '0';
    if (r - 1 >= 0 && grid[r - 1][c] == '1') dfs(grid, r - 1, c);
    if (r + 1 < nr && grid[r + 1][c] == '1') dfs(grid, r + 1, c);
    if (c - 1 >= 0 && grid[r][c - 1] == '1') dfs(grid, r, c - 1);
    if (c + 1 < nc && grid[r][c + 1] == '1') dfs(grid, r, c + 1);
  }
  //是1就搜索
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == '1') {
        count++
        dfs(grid, r, c)
      }
    }
  }
  return count
};