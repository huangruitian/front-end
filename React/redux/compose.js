/**
 * 函数组合， 函数式编程，声明式编程
 */
export default function (...func) {
    let len = func.length
    if (len === 0) {
        return args => args;
    } else if (len === 1) {
        return func[0]
    }
    // fn3 -> fn2 -> fn1
    return func.reduce((a, b) => (...args) => a(b(...args)))
}

// 普通写法
export default function compose(...func) {
    let len = func.length
    if (len === 0) {
        return args => args;
    } else if (len === 1) {
        return func[0]
    }
    return function (...args){
        let lastReturn = null
        for(let i = len - 1; i >= 0; i++){
            const fn = func[i]
            if(i == len - 1){
              lastReturn = fn(...args)
            }else{
              lastReturn = fn(lastReturn)
            }
        }
        return lastReturn
    }
}

