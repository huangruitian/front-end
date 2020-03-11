// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { applyMiddleware, createStore, bindActionCreators } from './node_modules/redux'
import logger from './node_modules/redux-logger'
import thunk from './node_modules/redux-thunk'
// import bindActionCreators from './bindActionCreators';
// import createStore from './createStore'
// import applyMiddleware from './applyMiddleware'
import actions from './action';
import reducer from './reducer';
import uuid from './node_modules/uuid'

/**
 * 中间件, 必须返回一个dispatch创建函数
 */

function loggerMiddleware1(store) {
    return function (next) { //返回一个dispatch创建函数, next表示下一个dispatch
        return function dispatch(action) { //最终运用的dispatch函数
            console.log('中间件1')
            console.log('旧数据1：', store.getState())
            console.log('action1', action)
            next(action)
            console.log('新数据1：', store.getState())
            console.log('')
        }
    }
}
/**
 * 为什么applyMiddleware一开始调用的时候是反过来的呢？
 * 因为applyMiddleware之后，dispatch才会运行，这时候才是正向运行，
 * 如果一开始不倒着来，得到的结果是倒着的喔！！！
 * 如果不调用next，就不会调用下一个中间件，这样的好处就是自己完成自己的事件。
 */
// function loggerMiddleware2(store) {
//     return function (next) { //下一个中间件的dispatch
//         return function dispatch(action) {
//             console.log('中间件2')
//             console.log('旧数据2：', store.getState())
//             console.log('action2', action)
//             next(action)
//             console.log('新数据2：', store.getState())
//             console.log('')
//         }
//     }
// }
// const loggerMiddleware3 = store => next => action => {
//     console.log('中间件3')
//     console.log('旧数据3：', store.getState())
//     console.log('action3', action)
//     next(action)
//     console.log('新数据3：', store.getState())
//     console.log('')
// }
let middleware = [thunk, logger]
let store = createStore(reducer, applyMiddleware(...middleware))
// 其实相当于
// let store = applyMiddleware(...middleware)(createStore)(reducer)

//增强action, 自动触发dispatch
let action = bindActionCreators(actions, store.dispatch)

console.log(store.getState())

let listener2 = store.subscribe(() => {
    console.log('监听器2')
})

// 想要得到原来的数据,又不影响原来的dispatch功能? 怎么办?
// 中间件原理
// let oldDispatch = store.dispatch
// store.dispatch = function(action){
//     console.log('旧数据：', store.getState())
//     console.log('action：', action)
//     oldDispatch(action)
// }

// oldDispatch = store.dispatch
// store.dispatch = function(action){
//     console.log('旧数据2：', store.getState())
//     console.log('action2：', action)
//     oldDispatch(action)
// }

// 得到一个action，然后再触发，太麻烦了。。。
// store.dispatch(actions.addUser({
//     id: uuid(),
//     name: 'redux',
//     age: 5
// }))
// console.log('增加一个用户后', store.getState())
// 自动触发
// listener2()
// action.addUser({
//     id: uuid(),
//     name: 'redux',
//     age: 5
// })
// console.log('test增加一个用户后', store.getState())



export default store