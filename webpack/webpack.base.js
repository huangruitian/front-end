// 允许导出一个函数，会调用这个函数，返会一个配置对象
// env 环境，在运行命令的时候传入
// 如：npx webpack --env.dev
module.exports = function(env){
    // 这样就不需要写多个配置文件了。
    if(env && env.dev){
        return {
            mode:"development"
        }
    }else{
        return {
            mode:"development"
        }
        // 还可以这么玩
        return require('./webpack.config')
    }
}