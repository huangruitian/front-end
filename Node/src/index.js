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

//页面加载就设置html大小
(
   function (doc, win, designWidth) {
      var html = document.documentElement;
      // var dpr = win.devicePixelRatio;
      function refreshRem() {
         const clientWidth = html.clientWidth;
         if (clientWidth >= designWidth) {
            html.style.fontSize = "100px";
         } else {
            // 目的是以iphone6为基准，为什么拿它?
            // 因为dpr到达2.0用户的肉眼已经分辨不出啥了，都是高清了。
            // html.style.fontSize = 16 * clientWidth / 375 + 'px';//这种要借助dpr换算
            html.style.fontSize = 100 * (clientWidth / designWidth) + 'px';
            //上面这种方式可以直接根据设计稿的大小除以100得到rem的大小                      
         }
      };
      //dom节点加载完成运行
      doc.addEventListener('DOMContentLoaded', refreshRem);
   }
)(document, window, 750); //750为基准，可以灵活设置

var socket = WebSocket