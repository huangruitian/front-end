const os = require("os")
const printCurrentUser = () => {
    console.log("系统当前用户：", os.userInfo().username)
    console.log("系统进程ID：", process.pid)
    console.log("脚本路径：", __filename)
}

module.exports = printCurrentUser