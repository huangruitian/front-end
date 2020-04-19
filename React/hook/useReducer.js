import React, { useState }from 'react'

// redux：action -> store.dispatch(action.type) -> reducer -> newState -> store
// 自定义hook，useFetchHook 之类的。
// hook 放在函数组件最顶层。
// 通用的reducer hook, 其实就是一个store
export default function useReducer(reducer, initState, initFunc) {
    // initFunc是一个对第二个参数进行计算的一个回调函数
    const [state, setState] = useState(initFunc ? initFunc(initState) : initState)
    // 相当与store.dispatch
    function dispatch(action){
        const newState = reducer(state, action)
        setState(newState)
    }
    return [state, dispatch]
}
