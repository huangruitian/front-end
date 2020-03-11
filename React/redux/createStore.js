/**
 * createStore 返回一个对象
 * dispatch:分发一个action
 * getState:得到当前的 state
 * subscribe:订阅一个监听器, 分发一个action后会自动执行，会返回一个函数，可以取消监听器
 * Symbol('observable'): 提案，暂时用不到
 * @param {function} reducer reducer，一个总的reducer
 * @param {any} defaultState 默认值
 * @param {any} enhanced 表示applyMiddleware 返回的函数
 */

import * as util from './util'
import * as actionType from './actionType'
export default function createStore(reducer, defaultState, enhanced){
  if(typeof defaultState === 'function'){
    //第二个是中间件函数
    enhanced = defaultState
    defaultState = undefined
  }
  if(typeof enhanced === 'function'){
    //进入applyMiddleware处理逻辑
    return enhanced(createStore)(reducer, defaultState)
  }

  let curReducer = reducer,
      curState = defaultState
  const listeners = []
  const dispatch = (action) => {
    //先判断action是不是平面对象
    if(!util.isPlainObject(action)){
       throw new TypeError('action must be an plain-object')
    }
    if(action.type === undefined){
      throw new TypeError('action must has a type property')
    }
    curState = curReducer(curState, action)
    listeners.forEach((d) => d())
  }
  const getState = () => curState;
  //订阅一个监听器，返回一个函数可以取消订阅
  const subscribe = (listener) => {
    listeners.push(listener)
    let isRemove = false
    return () => {
      if(!isRemove){
        let idx = listeners.indexOf(listener)
        listeners.splice(idx, 1)
        isRemove = true
      }
      return isRemove
    }
  }
  // 创建仓库时候需要dispatch初始化数据
  dispatch({
    type:actionType.INIT()
  })
  return {
    dispatch,
    getState,
    subscribe,
  }
}