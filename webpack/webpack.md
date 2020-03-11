# 浏览器端的模块化
- 效率问题：浏览器能通过srcipt引入模块，但是工程很多，会有几百个甚至上千个js文件
- 兼容性问题：浏览器仅仅支持ES6的模块化标准，并且还存在兼容性问题
- 工具问题：浏览器不支持npm第三方包

# 开发一个大规模的程序会遇到很多业务问题
- 执行效率、兼容性、代码的可维护性、团队协作、测试等等
- 工程问题和业务无关，但是很影响开发进度，没有一个好的一个工具解决，进度会变得极其的慢
- 有工具就可以专心的解决业务问题

# 根本原因
- 在node端没有这么明显，在浏览器这个问题很严重
- 因为node读取、运行文件是本地，而浏览器端是远程的
- 在浏览器端，devtime 和 runtime 的侧重点也不一样

- devtime：
  1. 模块分越细越好，代码重用
  2. 支持多种模块化标准
  3. 支持npm 或者其它的包管理工具
  4. 能够就解决其它工程问题，兼容性其它的

- runtime：
  1. 文件越少越好（请求少）
  2. 文件体积越小越好
  3. 代码越乱越好
  4. 所有的浏览器都要兼容
  5. 能够解决其它运行问题，主要是执行效率的问题

# 解决办法
- 如果有一个构建工具，devtime -> 构建工具 -> runtime 
- 这样一来，我们就可以专心的开发代码，无需太多的关心上面的工程问题

# 常见的构建工具
- webpack
- gulp
- grunt

===============================================================

# webpack
- 所有东西视为模块
- 有一个入口文件，然后分析依赖关系进行合并、压缩，最后打包。
- 为前端工程化而生
- 简单易用，零配置
- 强大的生态
- 基于node.js，运行在node环境中，所有模块化标准是commonjs。（打包构建的时候需要node环境）
- 只是打包的时候需要用到node环境
- 构建过程的分析，是根据模块化的引入依赖来分析的

# 安装
- 提供两个npm 包，webpack是核心包；构建过程的核心包
- webpack-cli 提供简单的cli命令，它调用了webpack核心包的api，来完成构建

- 全局安装，每个工程都会有同一个版本
- 推荐局部安装，这样的话每个工程都会有对应的版本

- npm init 初始化一个工程
- npm i -D webpack webpack-cli 本地安装这两个webpack包，项目名称不能是webpack，否则报错
- 直接npx webpack 命令打包，默认是使用 ./src/index.js作为入口，打包到 ./dist/main.js
- main.js完全没有兼容性的其它工程问题
- 注意，如果是开发依赖，就npm i -D，如果是普通依赖，要参与运行的，就直接npm i 不需要加 -D

# configuration 
- development 开发环境，方便调试
- production 默认是生产环境
- 可配置脚本运行，比较方便

# 模块换兼容性
- 由于webpack同时支持commonjs和ES6 module
- webpack是可以处理混用的，但是写代码不要精神分裂，推荐写代码的时候用ES6 module

# package.json 配置脚本
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode=production",       //npm run build 生产脚本
    "dev": "webpack --mode=development --watch" // --watch 监控文件变化
  },

# 分析编译文件
- 编译后的文件其实模块化只是变成了通用的立即执行函数
- 用文件路径唯一，为对象key, 值是函数。就能达到目地了

# 学习方法
- 重过程，轻目标：心态
  举例：学习算法，不要老想着你学习算法了能怎么怎么样，你要感受解题过程的乐趣，一旦把目标看得太重，学习就会非常的痛苦。

- 重大局，轻细节：思维
  要具有大局思维，把知识形成结构，就像我现在webpack基础薄弱，就要补充这个知识体系。但是细节东西可以看API文档

- 重基础，轻上层：路径
  要多花时间来建立基础，没有基础建立不了上层

- 重实践，轻理论：方法
  要多花时间写代码，光学没什么用的，纸上来得终觉浅。

# 配置文件 webpack.config.js
- 在使用的时候，webpack 默认使用这个配置文件
- 可以使用命令改变 npx webpack --config xx.js
- 导出webpack 的配置，只能使用commonJS模块化写法，因为编译的时候要基于node运行
- console.log(window) 这样肯定会报错，window是浏览器环境，不是node的
- 注意：我们写代码的时候可以写任何类型的模块化，但是写配置文件的时候只能写commonJS

# devtool 配置
- source map 记录源代码位置的地图文件，就是记录打包之后很乱的文件代码具体位置
- source map 在开发的时候用，作为一个调试手段
- source map 文件很大，不应该在生产的时候使用
- chrome谷歌浏览器率先支持了source map
- webpack 中的 source map，编译后的代码难以调试，可以通过devtool 配置来优化调试
- devtool:"none", 默认值
- https://www.webpackjs.com/configuration/devtool/#devtool

# webpack编译过程
- 整个过程大致分为三个步骤
1. 初始化
- webpack-cli提供webpack命令，来运行webpack核心包。
- 这个阶段，webpack会将cli参数、配置文件、默认配置进行融合，形成一个最终的配置对象
- 可以这么简单的理解为，初始阶段主要用于产生一个最终的配置对象

2. 编译
- 创建chunk，即块，是根据默认的入口文件来创建，可以有多个块
- 每个chunk都至少有两个属性：(1) name: 名字，默认为main (2) id: 唯一的编号，开发环境和name相同，生产环境是一个数字，从0开始。

- 构建所有的依赖模块
入口-> 模块文件 -> 检查记录 -> 未记录才继续 -> 读取文件内容 -> 语法分析 -> AST 抽象语法树
-> 记录依赖，保存到dependencies中 -> 替换依赖函数 -> 保存转换后的模块代码（*记录）
-> 根据dependencies的内容递归加载模块

*记录：用key:value的形式记录，./src/index.js: 替换后的代码xxx

- 每个chunk 都有自己的hash 

- 合并chunk assets 
将多个chunk的assets合并到一起，产生一个总的hash 
- 最终就是为了产生一个总的chunk

3. 输出
- 这个步骤会简单很多，webpack将利用node的fs模块，文件处理模块，根据编译产生的总的assets，生成相应的文件

# webpack 术语
- module：模块，分割代码单元，webpack里面的模块可以是任何的资源，不单单JS文件
- chunk：webpack构建块的块，一个chunk中包含多个模块，这些模块是从入口文件模块通过依赖分析出来的
- bundle：chunk构建好模块后，会生成chunk assets的资源清单，清单中的每一项就是一个bundle，可以认为bundle就是最终生成的文件
- hash：最终的资源清单所有内容联合生成的hash值
- chunkhash：chunk生成的资源清单内容联合生成的hash值
- chunkname：chunk的名称，如果没有配置则使用main
- id：通常指chunk的唯一编号，如果在开发环境下构建，和chunkname相同；如果是生产环境构建，则用一个0开头的数字进行编号

# 入口和出口
- dirname，node环境下
- 模块化代码中，比如require('./')，表示当前js文件所在的目录
- 在路径处理中，'./'表示node运行目录
- __dirname: 所有情况下，都表示当前运行的js文件所在的目录，他是一个绝对路径（从盘符开始是绝对）
- node path 模块：提供了对路径处理的很多函数

- 入口，真正配置是chunk
- entry: './src/index.js'，其实这样写不规范
- entry:{
    main:'./src/index.js', 规范写法，相当于上面的；属性名称是chunk名称，对应的值才是入口
    a:'./src/a.js'
  }
- 可以有多个入口，一个入口就一个bundle, 一个bundle打包一个js文件
- 注意：配置出口的时候就不能写成静态的写法，因为两个入口输出到一个文件了。
要动态写法filename:'[name].js'，不然会报错
- a:['./src/a.js', './src/b.js']，启动模块有两个，还是一个bundle打包一个js文件

- 出口，输出的资源清单，可以通过output进行配置
   output: {               //打包输出的配置
     filename:'bundle.js', //打包之后的文件名
     path: path.resolve(__dirname, 'target') //必须配置一个绝对路径，target默认是dist
   },
- path: path.resolve 会组合路径
- filename: 资源的文件名，配置的是合并js文件的规则，可以静态写法，
也可以规则写法，'script/bundle.js'
- hash：总的资源hash，通常用于解决缓存的问题，因为浏览器可能会缓存文件，避免导致改了客户端没变。 filename:'[hash].js', 只要文件内容没变，hash值不会变。也可以使用chunkhash，也可以取hash值的前几n位。[hash:n]

# 入口和出口的最佳实践（适合新手）
- 具体情况，具体分析

1. 一个页面一个js，入口entry就要配置多个chunk；这种方式适用于页面之间的功能差异巨大、公共代码较少的情况，这种情况下打包出来的最终代码不会有太多的重复。因为每个chunk都会有公共代码，打包出来的每个bundle.js也会有公共代码。
- 那为什么不能把common打包一个chunk呢？ 因为webpack打包的时候是一个立即执行函数封闭作用域，模块化独立了，不能再用common的chunk了

2. 一个页面多个js，这种方式适合有独立、相同的common代码

3. 单页应用
- 所谓的但页面应用，是指整个网站都只有一个页面。vue、react就是单页面应用框架
- 一个入口，一个出口就完事了

# loader 加载器
- webpack做的事情，仅仅是分析出各种模块中的依赖，然后形成资源列表，最终打包生成到指定的文件中
- 更多的功能需要借助loaders、plugins完成
- loader本质上是一个函数，他的作用是将某个源码字符串转换另一个源码字符返回
- 怎么爽怎么写的字符串代码（代码）-> loader -> 你想要的字符串，一般都是合格的（代码）
- loader 加载器是在 AST 抽象语法树之前做的
- loader 配置：
      module:{    //loaders
          rules:[  //模块的匹配规则
            {      //规则1
              test:/index\.js/, //正则匹配规则
              use:[             //要用到的加载器，每个加载器是一个对象
                {
                  loader:'./loaders/test-loader' //加载器路径
                }
              ]
            },    
            {},    //规则2
          ],  
      }
- 加载器还是运行在node环境下的

# 处理样式
- 引入样式文件是可以 require('./src/assets/rest.css') 的方式引入的，webpack会当成模块处理
- 也是经过loader来处理，把文件内容改成你想要的格式
- 图片差不多

# plugin 
- loader 加载器，只是转换代码，功能有限
- plugin 插件，把一些特定的功能需求嵌入到webpack的编译流程中，而这种事情的实现依托于plugin。
- plugin 本质上是一个带有apply方法的对象，但一般是class ES6 的写法
  var plugin = {
    // compiler 对象是初始化阶段创建的，整个打包过程只有一个compiler对象
    // 后续的打包工作是compiler对象内部创建的compilation 完成的，负责编译和输出
    // 配置文件watch之后，文件发生改变了会重新创建compilation完成编译打包，不初始化
    // apply会在compiler对象创建好之后就会运行，只会运行一次。文件改变了不会再运行
    apply: function(compiler){
       //在这里注册事件，类似于window.onload
       compiler.hooks.事件名次.事件类型(name, function(compilation){
          //事件处理函数, 改变文件这里会重新运行
       })
    }
  }
- 怎么用插件，直接在配置对象里面配置plugins:[]
- 最好练习画个图

# 区分环境
- 怎样区分生产环境和开发环境？
- 用多个配置文件，然后写脚本运行特定的脚本，dev:'webpack --config webpack.dev.js'

# 其它细节配置
- 细枝末节
- 知道它能干什么
- 他怎么做的，忘了就忘了，查文档
- context，会影响当前入口配置和loaders
- noParse，不解析正则表达式匹配的模块，通常用它来忽略那些大型的单模块库，以提高构建性能，因为这些单模块库，开发的时候不需要改什么东西了。前提条件是它没有任何的依赖。
影响的是打包过程的性能。
- webpack构建打包的时候，不会运行源代码，只是在寻找依赖解析构建打包！！！
- resolve，模块的查找位置
- require("./a")，为什么没有书写后缀名，任然可以找到a.js ？
  因为webpack会自动补全，extensions 配置。
- alias 引入模块时候的别名
- externals 替换最终的打包文件，让代码更少，但是要在html文件上先引入文件，适用CDN引入的外部文件。

# webpack 两个常用的扩展，加载器和插件
- 以后react或者vue的脚手架，都是基于webpack配置的
- 了解常用的插件
- clean-webpack-plugin，自动清楚没用的文件
- html-webpack-plugin，自动生成html文件
- copy-webpack-plugin，把资源原封不动的复杂到dist，如图片
- 开发阶段的服务器，用于调试，看效果等等。webpack官方制作了一个单独的库；
webpack-dev-server 它既不是加载器、也不是插件。直接执行 webpack-dev-server 命令就完事了，也支持原来的一些参数。但是它只是在开发阶段使用，打包发布真正的代码还是要运行webpack命令。
代码改变它也会重新编译
- 这个插件内部执行webpack命令，开启watch，
- 开启的服务器http://localhost:8080/，请求的API地址不一样，就会产生跨域的问题。
用proxy代理就行了。注意有些请求要验证请求头的host。
* http://localhost:8080/xxx -> webpack-dev-server(proxy 服务器代理) -> http://baidu.com:8080/xxx
* 不配代理：http://localhost:8080/xxx -> http://baidu.com:8080/xxx (跨域)

# 普通文件处理
- file-loader，处理文件，生成相同内容文件到输出目录
- url- loader，处理文件，生产base64，写过了，看文件

# 解决路径问题
- 再看一次

# webpack 内置插件
const webpack = require("webpack")
new webpack.插件名(options)

==============================================

# CSS前端工程化
1. CSS的问题
- 类名冲突
- 重复样式
- css文件细分问题

2. 解决CSS问题
类名冲突的解决办法
- BEM、OOCSS、AMCSS 等命名规范
- css in js
- css module

类名重复的解决办法
- css in js
- less
- sass

类名细分的解决办法
- 这部分利用webpack来处理，利用liader 或 plugin来打包、合并、压缩

# 利用webpack拆分css
- webpack会把css当成js文件来读取，但是它并不认识css文件，因此分析的时候会出错，就必须需要一个loader 加载器，能够将css转换成js
- css-loader，将css代码转换成js代码
- url-loader, 把图片处里成base64
- file-loader, 把图片路径处理一下
- 总结：1.将css文件的内容作为字符串导出；2.将css中其它的依赖require导出，以便webpack分析

- style-loader
- 把css-loader转换出来的字符串变成页面样式；以为css-loader只是处理成字符串
- style-loader 不会多次运行

- BEM
- .banner_dot_selected，这样命名的类。就是BEM  

- css in js，react就是这样
- const styles = { color:'#fff' }
- 不会有冲突，灵活，但是写法和传统的css写法差别很大

- css module
- css -> 构建工具（唯一hash）-> css
- 在配置css-loader的时候将modules设置为true
- 但是怎么用呢？ 
   module:{ //loader
       rules:[  
          {
             test:/\.css$/,
             // css-loader(开启css modules 模块化，解决类名冲突) -> style-loader -> page
             use:['style-loader', 'css-loader?modules=true'] 
          }
       ]
   }

- 重复样式问题
# css预编译器
 浏览器无法识别的css -> less/sass -> css
- 在webpack中使用，转换代码就是loader
- less（less-loader） -> css（css-loader） -> js（style-loader） -> 放置到style元素
- 可以联用 BEM 命名规范

- postCss，是css的一套解决方案。可以加浏览器样式前缀，让样式的兼容性更好等等
- 前端的最佳实践还需要很漫长的一段时间

=============================================

# js 兼容性问题

- 各种花式书写的语言 -> babel（编译器） -> 兼容的语言
- babel 可以和构建工具联用，也可以独立使用
- 独立使用提供两个包，babel-cli/babel-core
- babel本身并不做什么，正真编译的是预设和插件，postcss也是如此
- .babelrc 配置文件
- .browserslistrc 解析浏览器版本文件
- @babel/polyfill 已经过时了
- @babel/preset-env 预设会用到 .browserslistrc