/*
 * @Description: 浏览器原理
 * @Autor: hrt
 * @Date: 2019-12-05 10:13:49
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-09 09:20:38
 */

// 一、回流和重绘
// 1.浏览器渲染原理
/*
1）解析HTML，生成dom树，解析CSS，生成CSSOM树
2）将dom树和CSSOM树结合，生成渲染树
3）Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
4）Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
5）Display:将像素发送给GPU，展示在页面上。
（这一步其实还有很多内容，比如会在GPU将多个合成层合并为同一个层，并展示在页面中。而css3硬件加速的原理则是新建合成层，这里我们不展开，之后有机会会写一篇博客）

浏览器看这个：https://juejin.im/post/5c337ae06fb9a049bc4cd218#heading-12
*/

Promise.resolve().then(() => {
  console.log('Promise1')
  setTimeout(() => {
    console.log('setTimeout2')
  }, 0)
})

setTimeout(() => {
  console.log('setTimeout1')
  Promise.resolve().then(() => {
    console.log('Promise2')
  })
}, 0)

// Promise1 -> setTimeout1 -> Promise2 -> setTimeout2
// 宏任务 -> 微任务 （执行完宏任务就执行微任务，循环至任务队列为空）
