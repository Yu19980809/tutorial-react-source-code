import React, { useState, useEffect, useRef, useImperativeHandle } from 'react'

// 基于 React.forwardRef 实现 ref 转发，目的：获取组件内部的某个元素
// const Child = React.forwardRef((props, ref) => (
//   <div className="child-box">
//     <p ref={ref}>hello</p>
//   </div>
// ))

// 基于 React.forwardRef 实现 ref 转发
// 目的：获取函数子组件内部的状态和方法（使用useImperativeHandle）
const Child = React.forwardRef((props, ref) => {
  const [text, setText] = useState('morning')
  const submit = () => console.log('submit')

  useImperativeHandle(ref, () => {
    // 在这里返回的内容，都可以被父组件的REF对象获取到
    return {
      text,
      submit
    }
  })

  return (
    <div className="child-box">
      <p ref={ref}>hello</p>
    </div>
  )
})

const Demo = () => {
  let x = useRef()
  useEffect(() => {
    console.log(x.current)
  }, [])

  return (
    <div>
      <Child ref={x} />
    </div>
  )
}

export default Demo
