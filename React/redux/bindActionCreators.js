/**
 * 增强action，自动dispach
 * 接受两个参数
 * 第一个是actions，如果是函数，返回一个函数，如果是对象，返回一个对象
 * 第二个dispach，actions需要增强的函数
 */

//得到一个自动分发的action的创建函数
const getAutoDispatchActionCreator = (actionCreators, dispatch) => {
  return (...arg) => {
    //注意arg是个数组
    const action = actionCreators(...arg)
    dispatch(action)
  }
}

//增强action, 自动触发dispatch
export default (actionCreators, dispatch) => {
  // console.log('bind', typeof actionCreators)
  if (typeof actionCreators === 'function') {
    return getAutoDispatchActionCreator(actionCreators, dispatch)
  } else if (typeof actionCreators === 'object' && actionCreators) {
    const result = {}
    for (const key in actionCreators) {
      if (actionCreators.hasOwnProperty(key)) {
        const actionCreator = actionCreators[key]
        if (typeof actionCreator === 'function') {
          result[key] = getAutoDispatchActionCreator(actionCreator, dispatch)
        }
      }
    }
    return result
  } else {
    throw new TypeError('actionCreators must be an object or function')
  }
}