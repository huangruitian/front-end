export default {
    plugins:[
        ["umi-plugin-react", {
        title:true, //开启title插件
        dva:true,   //开启dva，整合dva到umi下
        // immer:true, //开启immer插件，dva-immer，不建议开，写可变对象会变成不可变对象
        }]
]
}