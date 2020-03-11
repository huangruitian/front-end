const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")
// 导出webpack 的配置，只能使用commonJS模块化写法，因为编译的时候要基于node运行
// console.log(window) 这样肯定会报错，window是浏览器环境，不是node的
var path = require('path')
module.exports = {
   mode:"development",     //开发模式，和命令行冲突会优先使用命令行的
   entry:"./src/index.js", //默认情况是./src/index.js
   output: {               //打包的配置
     filename:'bundle.js', //打包之后的文件名
     path: path.resolve(__dirname, 'target') //必须配置一个绝对路径，默认是dist
   },
   devtool:"none",         //默认没有调试的source map
   module:{                //loaders
      noParse:/a\.js$/,    //不对a模块做任何处理，直接加到输出结果中
      rules:[              //模块的匹配规则
        {                  //规则1
          test:/index\.js/,//正则匹配规则
          use:[            //要用到的加载器，每个加载器是可以是一个对象，也可以直接是字符串
            {
              loader:'./loaders/test-loader' //加载器路径
            }
          ]
        },    
        {                   //规则2，处理样式
          test:/\.css$/,    //匹配css文件
          use:['css-loader']//用css-loader处理
        },
        {                           //规则2，处理图片
          test:/\.(png)|(jpg)$/,    //匹配图片
          use:[
            {
               loader:'./loaders/img-loader.js',
               options: {     //参数
                 limit: 3000, //字节大小
                 filename:"img-[contenthash:5]"
               }
            }
          ]
        },    
      ],  
   },
   plugins:[
     new CleanWebpackPlugin(), //清除旧的JS文件，插件位置随便写，功能不互相冲突就行了
     new HtmlWebpackPlugin({   //自动生成html文件
        template:'./public/index.html' //生成的模版，js文件会自动引入，如果有多个入口thunk，一个thunk一个js文件
     }),
     new webpack.DefinePlugin({ //webpack 内置插件，定义常量
       PI:`Math.PI`,            //定义了全局常量
       VERSION:`"1.0.0"`,
       DOMAIN:JSON.stringify('baidu.com')
     })  
    ],
   resolve:{               // 解析模块时候的配置
     modules:['node_modules'], //模块的查找位置
     extensions:[".js", ".json"],        //webpack会自动补全没有写全文件后缀的js文件
     alias:{ //引入模块时候的别名，就不用写那么长那么恶心的路径了
       "@": path.resolve(__dirname, 'src'), //@ 就直接相当于src了
        //可以有多个
     }
   },
   externals: {     //替换最终打包文件的代码，不用打包这么多代码，比较适用一些外部CDN方式引入的文件
     jquery:"$",
     lodash:'_'
   },
   devServer:{    // 配置 webpack-dev-server
     port:8080,
     open:true,   // 自动打开浏览器窗口
     proxy:{      // 代理规则
       "/api": {  // /api 是正则匹配，
         target: 'http://www.baidu.com:8080/', //替换成这个真实的目标请求
         changeOrigin: true,                   //修改请求头中的host和origin
       },
       "/abc":{   // 可以配置多个代理

       }
     },
     stats: {         //提示信息
       modules:false, //打包的时候不显示模块信息
       colors: true   //显示颜色，好看点
     }
   }
}