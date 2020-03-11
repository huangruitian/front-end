import React, { useState, useCallback } from 'react'

class CallBack extends React.PureComponent {
    render() {
        console.log('CallBack render')
        return (
            <div>
                <button onClick={ this.props.onClick }>点击</button>
            </div>
        )
    }
}

export default function Parent(){
    const [n, setN] = useState(0)
    const [txt, setTxt] = useState(123)
    console.log('Parent render', txt)
    {/* useCallback把参数函数地址固化，CallBack类组件的PureComponent浅比较有效 */}
    const handleClick = useCallback(() => {
        setTxt(txt + 1)
    }, [txt]) //依赖项变了才会返回新地址的函数

    return (
        <div>
            {/* onClick函数地址变了，导致CallBack类组件的PureComponent浅比较无效 */}
            <CallBack text={txt} onClick={ handleClick }/>
            <input value={n} type='number' onChange={
                e => {
                    setN(e.target.value)
                } 
            }/>
        </div>
    )
}
