import { useState } from 'react'
// import { flushSync } from 'react-dom'

// let _state
// const useState = initialValue => {
//   if (typeof _state === 'undefined') {
//     if (typeof initialValue === 'function') {
//       _state = initialValue()
//     } else {
//       _state = initialValue
//     }
//   }

//   const setState = value => {
//     if (Object.is(_state, value)) return
//     if (typeof value === 'function') {
//       _state = value(_state)
//     } else {
//       _state = value
//     }
//     // 通知视图更新
//   }

//   return [_state, setState]
// }

const Demo = () => {
  console.log('render')
  const [num, setNum] = useState(0)

  const handleClick = () => {
    for (let i = 0; i < 10; i++) {
      // setNum(num + 1)
      // flushSync()

      setNum(prev => prev + 1)
    }
  }

  return (
    <div className='demo'>
      <p className='num'>{num}</p>
      <button onClick={handleClick}>
        +1
      </button>
    </div>
  )
}

export default Demo
