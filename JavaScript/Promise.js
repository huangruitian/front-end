/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-09-06 15:31:55
 * @LastEditors: hrt
 * @LastEditTime: 2019-09-06 17:00:23
 */
function myPromise(executor) {
  var self = this;
  self.status = 'pending'
  self.resVal = null
  self.rejVal = null
  self.resCbArr = []
  self.rejCbArr = []
  function res(val) {
    if (self.status === 'pending') {
      self.status = 'res'
    }
    self.resVal = val;
    self.resCbArr.forEach(function (ele) {
      ele()
    })
  }

  function rej(val) {
    if (self.status === 'pending') {
      self.status = 'rej'
    }
    self.rejVal = val;
    //真正触发rej状态的时候才执行
    self.rejCbArr.forEach(function (ele) {
      ele()
    })
  }

  try {
    executor(res, rej)
  } catch (e) {
    rej(e)
  }
}

myPromise.prototype.then = function (res, rej) {
  //空then处理
  if(!res){
    res = function(val){
      return val
    }
  }
  if(!rej){
    rej = function(val){
      throw new Error(val)
    }
  }
  var self = this;
  var nextPromise = new myPromise(function (resolve, reject) {
    if (self.status === 'res') {
      //异步执行
      setTimeout(function(){
        //异步then抛出异常
        try{
          var nextResVal = res(self.resVal)
          resolve(nextResVal)
        }catch(e){
          reject(e)
        }
      }, 0)
    }
    if (self.status === 'rej') {
      setTimeout(function(){
        try{
          var nextRejVal = rej(self.rejVal)
          resolve(nextRejVal)
        }catch(e){
          reject(e)
        }
      },0)
    }
    //如果new Promise的话，此时还是就绪状态
    if (self.status === 'pending') {
      //怎么判断是执行了res或者rej, 又或者是抛出异常呢?
      self.resCbArr.push(function () {
        setTimeout(function(){
          try{
            var nextResVal = res(self.resVal)
            resolve(nextResVal)
          }catch(e){
            reject(e)
          }
        },0)
      })

      self.rejCbArr.push(function () {
        setTimeout(function(){
          try{
            var nextRejVal = rej(self.rejVal)
            resolve(nextRejVal)
          }catch(e){
            reject(e)
          }
        })
      })
    }
  })
  return nextPromise
}

let oP = new myPromise((res, rej) => {
  // res(0)
  setTimeout(() => {
    // throw new Error('huang')
    rej(0)
  }, 2000)
})

oP.then((val) => {
  console.log(val, 'ok')
  return 1
}, (val) => {
  console.log(val, 'no')
  return 2
})
.then((val) => {
  console.log(val, '2ok')
}, (val) => {
  console.log(val, '2no')
})
// 链式操作和返回值
