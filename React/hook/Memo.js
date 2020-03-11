import React, { useState, useMemo } from 'react'

function Item({value}){
        return (
            <div>
                {value}
            </div>
        )
    }

export default function Parent(){
    const [n, setN] = useState(0)
    const [range,] = useState({min:0, max:1000})
    // const list = []
    // for(let i = range.min; i <= range.max; i++){
    //     console.log(i)
    //     list.push(<Item key={i} value={i}/>)
    // }
    // 随便改一下值，就会导致全部重新渲染，太可怕了，以前类组件的优化也无能为力
    // 这时候可以用useMemo，直接固化list，太爽了
    // 由于list没有变化，导致react元素本身引用没有变化，一定不会发生重新渲染。
    const list = useMemo(() => {
        const list = []
        for(let i = range.min; i <= range.max; i++){
            console.log(i)
            list.push(<Item key={i} value={i}/>)
        }
        return list
    }, [range.min, range.max])
    return (
        <div>
             {list}
             <div>
                <input value={n} type='number' onChange={
                    e => {
                        setN(e.target.value)
                    } 
                }/>
             </div>
        </div>
    )
}
