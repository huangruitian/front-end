const MyPromise = (() => {
    // Promise 有三种状态，不可逆
    const PENGDING = Symbol("pengding"),
        RESOLVED = Symbol("resolved"),
        REJECTED = Symbol("rejected"),
        PromiseValue = Symbol("PromiseValue"),
        PromiseStatus = Symbol("PromiseStatus"),
        changeStatus = Symbol("changeStatus"),
        settleHandle = Symbol("settleHandle"), // Promise 的后续处理状态
        linkPromise = Symbol("linkPromise"), // 链式调用的Promise
        thenables = Symbol("thenables"), // resolve 已决回调
        catchables = Symbol("catchables") // reject  已决回调
    return class {
        /**
         * 改变Promise的状态
         * @param {*} data Promise 保存的值
         * @param {*} newStatus Promise 改变的已决状态
         */
        [changeStatus] = (data, newStatus, queue) => {
            if (this[PromiseStatus] !== PENGDING) {
                return
            }
            this[PromiseStatus] = newStatus
            this[PromiseValue] = data
            // 改变状态的时候要执行之前注册的函数 thenables/catchables queue
            queue.forEach(handle => handle(data))
        }
        /**
         * 后续处理函数
         * @param {*} handle 后续处理函数
         * @param {*} immediatelyStatus 需要立即执行的状态
         * @param {*} queue 作业队列
         */
        [settleHandle] = (handle, immediatelyStatus, queue) => {
            if (typeof handle !== "function") {
                return
            }
            if (this[PromiseStatus] === immediatelyStatus) {
                // 立即执行，模拟异步
                setTimeout(() => {
                    handle(this[PromiseValue])
                }, 0)
            } else {
                // 状态没改变，先存储到异步队列
                queue.push(handle)
            }
        }
        [linkPromise](thenable, catchable) {
            /**
             * 
             * @param {*} data     当前Promise的值
             * @param {*} thenable 立即执行的 thenable
             * @param {*} resolve  下一个Promise 的resolve
             * @param {*} reject   下一个Promise 的reject
             */
            const exec = (data, thenable, resolve, reject) => {
                try {
                    // 得到当前Promise的处理结果
                    const result = thenable(data)
                    // result 如果是一个promise 对象怎么处理？
                    if (result instanceof MyPromise) {
                        result.then(res => {
                            resolve(res)
                        }, err => {
                            reject(err)
                        })
                    } else {
                        // 这里要注意上一个Promise，不管是resolve 还是 reject，
                        // 下一个 Promise 都是 resolve
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }
            return new MyPromise((resolve, reject) => {
                // 这里要拿到上一个Promise的值，也就是thenable的值？怎么办呢？
                // 回调函数解决
                this[settleHandle]((prevPromiseVal) => {
                    //    const prevPromiseVal = thenable(data)
                    //    然后传递下去    
                    //    resolve(prevPromiseVal)
                    exec(prevPromiseVal, thenable, resolve, reject)
                }, RESOLVED, this[thenables])

                this[settleHandle]((err) => {
                    //上一个Promise err，立即执行的catchable，下一个Promise的resolve / reject
                    exec(err, catchable, resolve, reject)
                }, REJECTED, this[catchables])
            })
        }
        /**
         * 
         * @param {*} executor 
         */
        constructor(executor) {
            this[PromiseStatus] = PENGDING
            this[PromiseValue] = undefined
            this[thenables] = []
            this[catchables] = []
            const resolve = (data) => {
                this[changeStatus](data, RESOLVED, this[thenables])
            }
            const reject = (reason) => {
                this[changeStatus](reason, REJECTED, this[catchables])
            }
            // new Promise 抛出异常
            try {
                executor(resolve, reject)
            } catch (error) {
                reject(error)
            }
        }
        /**
         * 
         * @param {*} resolve 
         * @param {*} reject 
         */
        then(thenable, catchable) {
            // 如果当前是已决状态，则直接执行
            // this[settleHandle](thenable, RESOLVED, this[thenables])
            // this.catch(catchable)
            // 都要返回一个Promise
            return this[linkPromise](thenable, catchable)
        }
        /**
         * 
         * @param {*} catchable 
         */
        catch (catchable) {
            // this[settleHandle](catchable, REJECTED, this[catchables])
            // 要返回一个Promise
            return this[linkPromise](undefined, catchable)
        }
        static all(proms) {
            // 关键点，全部的promise成功了才会返回日志列表
            return new MyPromise((resolve, reject) => {
                const results = proms.map(p => {
                    const obj = {
                        result: undefined,
                        isResolved: false
                    }
                    // data 成功了的数据
                    p.then(data => {
                        obj.result = data
                        obj.isResolved = true
                        //判断数组里面是不是都是 isResolved
                        const unResolved = results.filter(r => !r.isResolved)
                        if (unResolved.length) {
                            //全部完成，resolve 日志
                            resolve(results.map(r => r.result));
                        }
                    }, reason => {
                        //一个失败，整体失败直接 reject 
                        reject(reason)
                    })
                    return obj
                })

            })
        }
        static resolve(data) {
            if (data instanceof MyPromise) {
                return data
            }
            return new MyPromise((resolve) => {
                resolve(data)
            })
        }
        static reject(reason) {
            return new MyPromise((resolve, reject) => {
                reject(reason)
            })
        }

        static race(proms) {
            // 赛跑，只要有一个状态触发就触发了，直接包在 new MyPromise 就可以了
            return new MyPromise((resolve, reject) => {
                proms.forEach(p => {
                    p.then(data => {
                        resolve(data)
                    }, err => {
                        reject(err)
                    })
                })
            })
        }
    }
})()


const pro = new MyPromise((resolve, reject) => {
    console.log("new MyPromise")
    // resolve(1)
    // reject(1)
    throw Error(1)
})

pro.then(data => {
        console.log("then1: ", data)
        return 2
    }, err => {
        console.log("err1: ", err)
        throw Error(2)
    })
    .then(data => {
        console.log("then2: ", data)
    }, err => {
        console.log("err2: ", err)
    })