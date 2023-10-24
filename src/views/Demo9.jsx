import React, { useCallback, useState } from 'react'

// 子组件（类组件-使用 PureComponent）
// class Child extends React.PureComponent {
//   render() {
//     console.log('child render')

//     return (
//       <div>
//         Child
//       </div>
//     )
//   }
// }

// 子组件（函数组件-使用 React.memo）
const Child = React.memo(props => {
  console.log('child render')

  return (
    <div>
      Child
    </div>
  )
})

// 需求：当父组件更新的时候，因为传递给子组件的属性仅仅是一个函数
// 如果该函数没有发生变化，希望子组件不跟着父组件一起更新

// 达成条件一：需要保证传递给子组件的属性，每次都是相同的堆内存地址（基于 useCallback 处理）
// 达成条件二：在子组件内部也需要做一个处理，验证父组件传递的属性是否发生改变，有变化才更新（基于 PureComponent 处理）
const Demo = () => {
  const [num, setNum] = useState(0)

  // const handle = () => {}
  const handle = useCallback(() => {}, [])

  return (
    <div>
      <Child handle={handle} />

      <p>{num}</p>

      <button onClick={() => setNum(num + 1)}>
        +1
      </button>
    </div>
  )
}

export default Demo
