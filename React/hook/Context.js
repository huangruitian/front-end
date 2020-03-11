import React, { useContext }from 'react'

const ctx = React.createContext()

// function Test(){
//    return <ctx.Consumer>
//        {value => <div>Context: {value}</div>}
//    </ctx.Consumer>
// }

function Test(){
   const value = useContext(ctx)
   return <div>Context: {value}</div>
}

export default function Context() {
    return (
        <ctx.Provider value='abc'>
            <Test />
        </ctx.Provider>
    )
}
