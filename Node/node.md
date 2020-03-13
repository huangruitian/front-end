# 把底层了解，熟悉了，才会真正的掌握一个问题
- 掌握两个学习方法
1. 学会提问
2. 科学的思考 
- 为没事要学node.js？
- nodejs很火，公司要求？
- nodejs为什么很火？
3. nodejs和javascript有什么区别？
```js
console.log("111")
// 编译过程
// 1.语法分析，识别关键字（let const...）、标识符（var a = 1 中的a）、分界符（｛｝（））、运算符（+-*/）
// 语法分析一样是同一门语言吗？不是
// 2.词法分析，将代码转化为命令语句或者短语；如果语法分析和词法分析一样，就视为同一门语言，那么JS和node就是同一门
// 3.语义分析，程序作用在系统上，生产计算机操作系统能够执行的程序。
// - js node 最后的语义分析是不同的。js是运行在客户端浏览器引擎，node是运行在服务端
```
# js + v8 = nodejs(事件驱动)
- Nodejs是不是单线程的？
- 多线程封装到底层，你能感知到的是单线程的
```js
// 前端 ---网络---> 后端[web层（高并发，高性能） -> 服务层（复杂的业务逻辑） -> 持久层（庞大的数据吞吐量）] 
```
# 前后端分离
- 全站ajax
- 整体格局的思考，重新划分
```js
// 前端 [---网络---> web层（高并发，高性能）] ---> 后端[-> 服务层（复杂的业务逻辑） -> 持久层（庞大的数据吞吐量）] 
```
# 重新划分的一些问题
- 语言高性能
- 支持非阻塞IO，非阻塞IO的意思是：
- A -> B -> C 严格按照顺序执行，就是阻塞IO
- A和C随着B一起运行，不会互相影响，就是非阻塞IO
- 学习成本尽可能的低
- nodejs底层是多线程的，能看到的还是单线程的
- Java，C++ 有垃圾回收机制，但是自己要管理线程
- nodejs多线程，会帮你管理线程池，异步回调过程

# 会node就是全栈了吗？全栈都需要会什么？
- 取决于一个系统架构都有什么
1. 前端语言
2. 一门后端语言
3. 网络知识、持久化（缓存/数据库）
4. 后端无穷无尽
- 这是最基本的后端流程，web服务；服务（后端）是同一个节点
- 本地开发机 -> gitlab -> 发布机 -> 服务（后端）
- 浏览器 -> 反向代理 -> 服务（后端） -> 缓存 -> DB
- 要会基本的Linux操作

# node
1. 后端的规范和思想
- 分层
（1）web层，接受和发送Http请求，封装
（2）业务逻辑层（服务层，xxService）
（3）DAO层：DataBase存数据
- 存储：对象转为数据
- 读取：数据转为对象
（4）持久层：存在磁盘上
```js
- loginController（接受参数，判断是否非法） -> loginService（获取帐号密码，进行对比） -> loginDAO（从数据库获取数据，并转换为对象）-> 持久层（只是一个概念，一般为数据库）
// 从数据库获取数据，并转换为对象，其实还需要一个实体类
// 所以至少需要四层
// loginController -> loginService -> loginDAO（实体类）-> entity -> 数据库
// 单一职责，好维护
```
2. 基础的API
3. 常用的框架
4. web项目后端
- 接受web请求
- 处理业务逻辑（注册/登录/交易）
- 文件操作
- 数据库（关系型mysql，非关系型mongodb）
- 反向代理服务器（请求打到这个服务器。分配到指定的服务器），ip哈希，或者轮询
5. 分析大项目

#  模块化
```js
// module.exports 和 exports 有什么区别？
// 有 module.exports 的时候，exports就失效了
// module.exports == exports
// module.exports 和 exports 指向同一个空间引用
// 开闭原则，导出永远是  module.exports
// 全用 module.exports 才是规范
```
# 为什么 module.exports、module、exports拿来就能用呢？
- nodejs的模块，是运行在一个函数当中的
```js
function sys(exports, require, module, __filename, __dirname){
    // 这是我们自定义的代码
    var a = 1
    // 如何证明实践上是这样的？
    // 打印arguments
    console.log(arguments[0] == exports)
    // 所以，我们写的代码运行在一个函数中的
    return module.exports;
}
```
- 当前模块引入什么模块，都是当前模块的子模块
- 下载的node模块，都会放在node_modules里
- node index.js 会启动一个进程，不能再同时启动一个
# socket 模块
```js
// server
var net = require("net")
const app = net.createServer()
app.listen(12306, "127.0.0.1");
app.on('listening', function () {
    console.log('服务端已启动！')
})
app.on("connection", function (socket) {
    console.log('有客户端连接进来了！')
    // 浏览器访问，data会拿到的是http报文
    socket.on("data", function (data) {
        console.log('客户端发送过来的数据：', data.toString())
    })
    socket.on("close", function (data) {
        console.log('客户端已经关闭')
    })
})

// client
var clent = require("net")
var socket = clent.connect(12306, '127.0.0.1')
socket.on("connect", () => {
    console.log("已经连接到服务器了")
})
socket.on("data", function (data) {
    socket.end();
})
socket.on("close", function () {
    console.log("连接已经关闭了")
})
socket.write("hello browser")
```
# http 
```js
// net 是网络层和运输层的，遵循tcp/ip
var net = require("net")
var fs = require("fs")
const app = net.createServer()
app.listen(12306, "127.0.0.1");
app.on('listening', function () {
    console.log('服务端已启动！')
})
app.on("connection", function (socket) {
    console.log('有客户端连接进来了！')
    // 浏览器访问，会拿到的是http报文
    socket.on("data", function (data) {
        // console.log('浏览器发送过来的请求：', data.toString())
        try {
            // 同步读文件
            var data = fs.readFileSync(__dirname + "/index.html")
            socket.write(`HTTP/1.1 200OK\r\nContent-type:text/html\r\nServer:WDS/1.1\r\n\r\n${data.toString()}`)
        } catch (error) {
            socket.write(`HTTP/1.1 404NotFound\r\n\r\n<html><body>404</body></html>`)
        }
    })

    socket.on("close", function (data) {
        console.log('客户端已经关闭')
    })
})
```

# http 服务器
```js
// http 模块底层用的其实是net模块
var http = require("http")
var url = require("url")
http.createServer((req, res) => {
   const pathName = url.parse(req.url).pathname
   const params = url.parse(req.url, true).query
   //前端发出的请求分为多少种？要么静态资源，要么动态资源
   //简单的可以按照后缀来区别，比如.js/.css/.html
   res.writeHead(200)
   res.write("xxx")
}).listen(12306)
```
# 读写文件
