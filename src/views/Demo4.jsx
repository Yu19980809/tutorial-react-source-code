import { useState, useEffect } from 'react'

// 模拟从服务器异步获取数据
const fetchData = () => new Promise(resolve => {
  setTimeout(() => {
    resolve([10, 20, 30])
  }, 1000)
})

const Demo = () => {
  const [num, setNum] = useState(0)

  // useEffect 必须在函数的最外层上下文中调用
  // 不能将其签入条件判断、循环等操作语句中
  // if (num > 5) {
  //   useEffect(() => {
  //     console.log(num)
  //   })
  // }

  useEffect(() => {
    if (num > 5) console.log(num)
  }, [num])

  // 第一次渲染完毕之后，从服务器异步获取数据
  // 除了用于清理的函数之外，useEffect不能返回任何东西
  // 而使用了 async 修饰的函数，默认会返回一个 promise 对象
  // useEffect(async () => {
  //   const data = await fetchData()
  //   console.log('data: ', data)
  // }, [])

  // 解决方案一
  // useEffect(() => {
  //   const fetch = async () => {
  //     const data = await fetchData()
  //     console.log('data: ', data)
  //   }

  //   fetch()
  // }, [])

  // 解决方案二
  useEffect(() => {
    fetchData().then(res => console.log('data: ', res))
  }, [])

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
