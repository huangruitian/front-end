
import React, { useState, useEffect } from 'react'

// export default function (props) {
//   const [n, setN] = useState(0)
//   const [visible, setVisible] = useState(true)
//   return (
//     <div>
//       <div style={{ display: visible ? 'block' : 'none' }}>
//         <p>{n}</p>
//         <button onClick={() => { setN(n + 1) }}>+</button>
//         <button onClick={() => { setN(n - 1) }}>-</button>
//       </div>
//       <button onClick={() => { setVisible(!visible) }}>显示/隐藏</button>
//     </div>
//   )
// }

export default function (props) {
  const [n, setN] = useState(0)
  useEffect(() => {
    document.title = `${n}`
  })
  return (
    <div>
      <div>
        <p>{n}</p>
        <button onClick={() => { setN(n + 1) }}>+</button>
        <button onClick={() => { setN(n - 1) }}>-</button>
      </div>
    </div>
  )
}