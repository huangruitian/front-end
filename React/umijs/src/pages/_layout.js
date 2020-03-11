// 所在目录以及其所有的子目录中的页面，公用该布局。
import React from "react"
export default (props) => {
    console.log("_layout", props.children)
    return(
         <div>
            pages所有页面，公用布局。
            {props.children}
        </div>)
}
