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
```js
- {flag:'r'} 一般是 r w a，
- 回忆下Linux 读写文件权限的二进制 000 -> 111 -> 7可读可写可执行 
// 什么样的情况下用异步？什么情况下用同步？
// 烧开水 和 洗脸，如果两件事情没有必然联系的话，用异步
// 带Sync是同步，写文件
fs.writeFileSync()
// 异步写文件
fs.writeFile()
```
# mysql 军规，必须有主键，没有含义的，一般是ID
- 主键一般自增，其它不要自增
- 关系型数据库，只有表结构，存在硬盘
- 非关系型数据库，一般是key-value 结构，大多数都是存在内存上，速度相对较快
- 302 是浏览器跳转，表示重定向
- 写cookie 一般是后端返回response，Set-Cookie

# 后端常用功能
- 自动登录，读写cookie
- 文件下载和上传
- 页面跳转，读取文件
- 数据上传，写数据库
- 数据拉取，读数据库

# node 专属的三类全局对象
1. process，管理进程的，Buffer二进制数据流，处理文件，__filename 和 __dirname，文件路径和目录路径
2. Data之类的ES标准的对象
3. 实现方式不同的共有全局对象：console 和 setTimeout

# node 异步非阻塞
- 定时器并不会阻塞程序的运行，Hello World! 会延迟三秒输出
- 在实际的应用环境中，往往有很多 I/O 操作（例如网络请求、数据库查询等等）需要耗费相当多的时间，
- 而 Node.js 能够在等待的同时继续处理新的请求，大大提高了系统的吞吐率。
```js
    setTimeout(() => {
    console.log('Hello World!');
    }, 3000);
    
    console.log('当前进程 ID', process.pid);
    console.log('当前脚本路径', __filename);
    
    const time = new Date();
    console.log('当前时间', time.toLocaleString());
```

# node 模块机制
- 模块化的意义？
- 开发人员应使用通过定义明确的接口连接的简单零件来构建程序，因此问题是局部的，可以在将来的版本中替换程序的某些部分以支持新功能。 该规则旨在节省调试复杂、冗长且不可读的复杂代码的时间。
- “分而治之” 的思想在计算机的世界非常普遍，但是在 ES2015 标准出现以前都是通过引入标签的方式模块化<script>
- 这样的模块化会带了一些问题
1. 多个脚本的引入导致命名冲突
2. 多个脚本之间互相访问困难
3. 导入的脚本无法轻易的檫除或者修改

# 模块化标准的诞生
- AMD 在浏览器端使用较为广泛
- CommonJS，node实现的模块化标准

# node 模块分为两大类
1. 系统内置核心模块，一般是一些比较常用和基础的功能
2. 文件模块，用户编写的

- 其中，文件模块可以是一个单独的文件（以 .js、.node 或 .json 结尾），或者是一个目录。
- 当这个模块是一个目录时，模块名就是目录名，有两种情况：
1. 目录中有一个 package.json 文件，则这个 Node 模块的入口就是其中 main 字段指向的文件；
2. 目录中有一个名为 index 的文件，扩展名为 .js、.node 或 .json，此文件则为模块入口文件。

# node 模块浅析
具体而言，Node 引入了三个新的全局对象（还是 Node 专属哦）：
1. require
- 直接写文件名称或者模块名称，可以省略js后缀，不推荐绝对路径写法
- 内置模块实际上每个模块都有个路径搜索列表 module.paths

2. exports 
- exports.add = add;
- 使用的时候可以简单粗暴ES6结构拿

3. module
- 每个内置模块，或者自定义模块
- 之前的 **exports** 对象是指向 **module.exports** 的引用；所以推荐使用**module.exports**
```js
// 导出 add 函数
exports.add = add;
// 和上面一行代码是一样的
module.exports.add = add;

// 另一种引入方式，这种是直接令exports对象为add函数
module.exports = add;
```
- tips:直接写 exports = add; 无法导出 add 函数，因为 exports 本质上是指向 module 的 exports 属性的引用，
- 直接对 exports 赋值只会改变 exports，对 module.exports 没有影响。
- 如果你觉得难以理解，那我们用 apple 和 price 类比 module 和 exports：
```js
    apple = { price: 1 };   // 想象 apple 就是 module
    price = apple.price;    // 想象 price 就是 exports
    apple.price = 3;        // 改变了 apple.price
    price = 3;              // 只改变了 price，没有改变 apple.price
```

# node指令式开发
- 输入node 命令的时候，可以输入些参数；process.argv可以获取
- 但是这样的开发方式非常的固定，死板

# npm，洪荒之力，都赐予你
- npm 包管理工具，下载node的时候会自动附带
- npm 集中式依赖仓库，存放了其它js开发者分享的npm包
- npm 网站，可以搜索需要的npm包、管理npm帐号

- npm init 初始化项目
- 这时候 npm 会提一系列问题，你可以一路回车下去，也可以仔细回答；
- 最终会创建一个 package.json 文件。package.json 文件是一个 npm 项目的核心，记录了这个项目所有的关键信息；
- npm i -D 或 --save-dev 选项，代表 eslint 是一个开发依赖，在实际项目发布或部署时不需要用到。npm 会把所有开发依赖添加到 devDependencies 字段中，而不是项目的直接依赖

# package.json
- dependencies 直接依赖，依赖里面的版本问题，如果写成指定的数字，就是指定版本；还可以写成 * 或 x，那么直接安装最新版本（不推荐），或者 react:16.x 这样指定一个大的版本
- scripts 为脚本，npm run 脚本

# node 的异步世界
- 回调函数和事件机制共同组成了 Node 的异步世界。
- 具体而言，Node 中的事件都是通过 events 核心模块中的 EventEmitter 这个类实现的。EventEmitter 包括两个最关键的方法：
1. on：用来监听事件的发生
2. emit：用来触发新的事件
- 可以说，Node 中很多对象都继承自 EventEmitter，包括我们熟悉的 process 全局对象。

# express koa
