import React from "react"
export default (props) => {
    console.log("_layout", props.children)
    return(
         <div>
            网站所有页面，公用布局
            {props.children}
        </div>)
}