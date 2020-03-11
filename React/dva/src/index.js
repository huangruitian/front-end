
import React from "react"
import dva from "dva"
const App = (props) => {
    return(
        <div>
            网站根App
        </div>)
}
// 得到一个dva对象
const app = dva()

// 启动之前定义一个模型，redux-saga/action/reducer 整合在一起
// 必须在启动之前
app.model({
    namespace:"student",   //不能缺省，仓库名。
    state:{                //默认值
       total:0,
       datas:[]
    },
    reducers:{             //reducer，dva会自动合并
       // dva 约定，方法的名字，就是具体action type
       // 组件使用dva下的connect链接，跟以前一样的用法    
       delete(state, action){
         //以前同步的逻辑
         return {...state} //注意 immer 数据写法
       },
    },
    effects:{              //副作用，底层redux-saga，方法的名字就是触发的action
       /**
        * @param {*} action 
        * @param {*} sagaEffect redux-saga 对象
        *  {
        *     put({type:'delete'}) //重新触发自己的action，不用加前缀
        *     ...还有很多方法，查文档
        *  }
        */
       *asyncAdd(action, sagaEffect){
           
       }
    },
    /**
     * 每个对象是一个函数，订阅者。
     * 加入store的时候执行一次
     */
    subscriptions:{
       func1(obj){
         //处理一些订阅事件，因为它只运行一次，非常适合订阅一些事件
         //比如注册一些特别的事件
         //obj.dispatch({type:'delete'})  
       }
    }
})

// 设置启动后的根路由,
app.router(() => <App/>)
// 该函数传入一个选择器，相当于document.getElementById("root")
app.start("#root")



