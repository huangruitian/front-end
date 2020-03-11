import React, { useState, useRef, useImperativeHandle }from 'react'


function Test(props, ref){
   console.log('Test render')
   useImperativeHandle(ref, () => {
      return {
        method(){
            console.log('method must be caller')
        }
      }
   }, [])
   return <div>test111</div>
}

const WithTest = React.forwardRef(Test)

export default function ImperativeHandle() {
    console.log('ImperativeHandle render', WithTest)
    const [, forceUpdate] = useState({})
    const ref = useRef()
    return (
        <div>
            <WithTest ref={ref}/>
            <p>===</p>
            <button onClick={
                () => {
                    ref.current.method()
                }
            }>method</button>
            ===============
            <button onClick={
                () => {
                    forceUpdate({})
                }
            }>刷新</button>
        </div>
    )
}
