// webpack进阶
module.exports = {
   mode:'development',
   devtool:"source-map", //代码看得清晰点
   module:{ //loader
       rules:[  
          {
             test:/\.css$/,
             // css-loader(开启css modules 模块化，解决类名冲突) -> style-loader -> page
             use:['style-loader', 'css-loader?modules=true'] 
          },
          {
             //less（less-loader） -> css（css-loader） -> js（style-loader） -> 放置到style元素
             test:/\.less$/,
             use:['style-loader', 'css-loader?modules=true', 'less-loader'] 
          },
          {
            // babel本身不会转换js代码，需要babel预设
            test:/\.js$/,
            use:['babel-loader'] 
          }
       ]
   }
}