import React, { useState, useEffect, useRef } from 'react'

// const Demo = () => {
//   const [num, setNum] = useState(0)

//   // 基于“ref={函数}”的方式
//   // 可以把创建的DOM元素（或者子组件的实例）赋值给一个变量
//   let box
//   useEffect(() => {
//     console.log(box)
//   }, [])

//   const handleClick = () => {
//     setNum(num + 1)
//   }

//   return (
//     <div>
//       <p ref={x => box = x}>{num}</p>
//       <button onClick={handleClick}>
//         +1
//       </button>
//     </div>
//   )
// }

let prev1, prev2
const Demo = () => {
  const [num, setNum] = useState(0)

  let box1 = React.createRef()
  let box2 = useRef(null)
  if (!prev1) {
    // 第一次DEMO执行，把第一次创建的REF对象赋值给变量
    prev1 = box1
    prev2 = box2
  } else {
    // 第二次DEMO执行，验证一下，新创建的REF对象和第一次创建的是否一致
    console.log(prev1 === box1) // 输出 false
    console.log(prev2 === box2) // 输出 true
  }
  
  useEffect(() => {
    console.log(box1.current)
    console.log(box2.current)
  }, [])

  return (
    <div>
      <p ref={box1}>{num}</p>
      <p ref={box2}>hello</p>
      <button onClick={() => setNum(num + 1)}>
        +1
      </button>
    </div>
  )
}


export default Demo
