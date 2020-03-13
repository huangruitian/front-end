


// var net = require("net")
// var fs = require("fs")

// const app = net.createServer()
// app.listen(12306, "127.0.0.1");

// app.on('listening', function () {
//     console.log('服务端已启动！')
// })

// app.on("connection", function (socket) {
//     console.log('有客户端连接进来了！')
//     // 浏览器访问，会拿到的是http报文
//     socket.on("data", function (data) {
//         // console.log('浏览器发送过来的请求：', data.toString())
//         try {
//             // 同步读文件
//             var data = fs.readFileSync(__dirname + "/index.html")
//             socket.write(`HTTP/1.1 200OK\r\nContent-type:text/html\r\nServer:WDS/1.1\r\n\r\n${data.toString()}`)
//         } catch (error) {
//             socket.write(`HTTP/1.1 404NotFound\r\n\r\n<html><body>404</body></html>`)
//         }
//     })

//     socket.on("close", function (data) {
//         console.log('客户端已经关闭')
//     })
// })

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

var fs = require("fs")

// 什么样的情况下用异步？什么情况下用同步？
// 烧开水 和 洗脸，如果两件事情没有必然联系的话，用异步

// 同步写文件
fs.writeFileSync()
// 异步写文件
fs.writeFile()