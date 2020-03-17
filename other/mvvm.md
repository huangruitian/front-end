# 什么东西会影响用户体验？
- 性能方面可以在什么方面考虑
1. 响应时间
2. 动画
3. 操作dom，定时器
- innerHtml 比 createElement 好
4. css
- 层级不要过深，因尽量少于5层。
- 
5. layout 布局，页面的dom元素大小，以及位置。reflow
6. paint 绘图 元素颜色，图片，文本等
7. composite 渲染层合并
9. 优化 javascript 执行效率 
- 动画尽量不要用定时器；用 requestAnimationFrame -> 不掉帧，很流畅，或者CSS3
10. Workers 不会阻塞主线程

# 操作dom的成本
- console.dir(div)，一个dom对象的所有属性，至少70多个属性或方法；dom在内存中
- VDOM 