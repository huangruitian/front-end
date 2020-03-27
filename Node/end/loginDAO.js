// const printCurrentUser = require("./dbutil")
// const { printDate } = require("./loginController")
// printCurrentUser()
// printDate()

// setTimeout(() => {
//     console.log(process.argv[5])
//     console.log(process.argv)
// }, process.argv[3] * 1000)

const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

// 监听 connect 事件，注册回调函数
emitter.on('connect', function (username) {
  console.log(username + '已连接');
});

// 触发 connect 事件，并且加上一个参数（即上面的 username）
emitter.emit('connect', '一只图雀');