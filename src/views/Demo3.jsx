import { useState, useEffect } from 'react'

const Demo = () => {
  const [num, setNum] = useState(0)

  // 第一次渲染完毕和更新完毕之后执行
  // 输出更新之后的 num 的值
  useEffect(() => {
    console.log('@1', num)
  })

  // 第一次渲染完毕之后执行
  // 输出更新之后的 num 的值
  useEffect(() => {
    console.log('@2', num)   
  }, [])

  // 第一次渲染完毕之后，（和 num 发生了变化情况下的）更新完毕之后执行
  // 输出更新之后的 num 的值
  useEffect(() => {
    console.log('@3', num)
  }, [num])

  // 第一次渲染完毕和更新完毕之后执行
  // 返回一个函数（该函数会在下一次更新的时候执行，输出上一次的 num 的值）
  useEffect(() => {
    return () => {
      console.log(num)
    }
  })

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
