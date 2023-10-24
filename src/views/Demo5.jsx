import { useState, useEffect, useLayoutEffect } from 'react'

const Demo = () => {
  const [num, setNum] = useState(0)

  // useEffect 是在浏览器绘制和渲染真实DOM之后执行
  // useLayoutEffect 是在root.render方法创建好真实DOM，但是浏览器还没开始绘制的时候执行
  useEffect(() => {
    console.log('useEffect')
  }, [num])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [num])

  const handleClick = () => {
    setNum(num + 1)
  }

  return (
    <div>
      <p>{num}</p>
      <button onClick={handleClick}>
        +1
      </button>
    </div>
  )
}

export default Demo
