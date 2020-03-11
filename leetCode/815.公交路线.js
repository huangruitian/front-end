/*
 * @lc app=leetcode.cn id=815 lang=javascript
 *
 * [815] 公交路线
 */

// @lc code=start
/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function (routes, S, T) {
    let map = buildMap(routes)
    console
    let visted = new Map()
    let res = 0
    let queue = [S]
    visted.set(S, S)
    while(queue.length){
      let cur = queue.shift()
      let child = map.get(cur)
      child = child.filter(Boolean)
      if(child.includes(T)) return res;
      res++
      while(child.length){
        let item = child.shift()
        //不存在，代表没有遍历过
        if (!visted.has(item)) {
          queue.push(item)
          visted.set(item, item)
        }
      }
    }
    return -1;
};

function buildMap(routes) {
    let map = new Map()
    routes.forEach(arr => {
        arr.forEach(d => {
            if (!map.has(d)) {
                map.set(d, [])
            }
        })
    })
    let row = routes.length
    let col;
    for (let i = 0; i < row; i++) {
        col = routes[i].length
        for (let j = 0; j < col; j++) {
            let nodes = map.get(routes[i][j])
            let d;
            if (j === 0) { //第一个
                d = routes[i][j + 1]
                if (!nodes.includes(d)) nodes.push(d);
                d = routes[i][col - 1]
                if (!nodes.includes(d))  nodes.push(d);
            } else if (j === col - 1) { //最后一个
                d = routes[i][j - 1]
                if (!nodes.includes(d)) nodes.push(d);
                d = routes[i][0]
                if (!nodes.includes(d)) nodes.push(d);
            } else { //正常的
                d = routes[i][j - 1]
                if (!nodes.includes(d)) nodes.push(d);
                d = routes[i][j + 1]
                if (!nodes.includes(d)) nodes.push(d);
            }
        }
    }
    return map
}
// @lc code=end