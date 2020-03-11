/**
 * 组装reducers, 返回一个reducer，数据使用一个对象表示，
 * 对象的属性名与传递的参数对象保持一致
 * 返回的是一个reducer 函数
 */

import * as actionTypes from './actionType'
import * as util from './util'

const validiteReducers = (reducers) => {
  if (typeof reducers !== 'object' && !reducers) {
    throw new TypeError('reducers must be an object')
  }
  if (!util.isPlainObject(reducers)) {
    throw new TypeError('action must be a plain object')
  }
  //然后这里要验证一下每个reducer是不是返回了un，防止硬编码
  for (const key in reducers) {
    if (reducers.hasOwnProperty(key)) {
      const reducer = reducers[key];
      let state;
      state = reducer(undefined, {
        type: actionTypes.INIT()
      })
      if (state === undefined) {
        throw new TypeError('reducers must not return undefined')
      }
      state = reducer(undefined, {
        type: actionTypes.UNKNOWN()
      })
      if (state === undefined) {
        throw new TypeError('reducers must not return undefined')
      }
    }
  }

}


// 调用格式
// export default combineReducers({
//   users: usersReducer,
//   login: loginUserReducer,
// })

export default (reducers) => {
  //验证
  validiteReducers(reducers)
  //返回一个reducer函数
  return (state = {}, action) => {
    // 要返回新的状态
    const newState = {}
    for (const key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        const reducer = reducers[key];
        // 要去调用reducer，拿到状态，赋值同名属性
        newState[key] = reducer(state[key], action)
      }
    }
    //返回的reducer函数，它返回一个状态，得到一个新的状态
    return newState
  }
}