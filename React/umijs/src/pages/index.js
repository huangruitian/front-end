import React from "react"
import Test from "../components/test"
export default (props) => {
    console.log(props)
    return(
         <div>
            首页
            {props.children}
            <Test />
        </div>)
}