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

socket.write("hello server")
