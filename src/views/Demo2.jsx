import {useState} from 'react'

const Demo = (props) => {
  // 将传递进来的x和y经过复杂处理后，设置为初始值
  // let {x, y} = props,
  //     total = 0
  // for (let i = x; i <= y; i++) {
  //   total += +String(Math.random()).substring(2)
  // }
  // const [num, setNum] = useState(total)

  // 由于进行更新的时候，初始值是不会被使用的，所以前面的复杂处理也是无意义的，因为其结果不会被使用
  // 所以应该将其写在useState()内部，这样在更新时，就不会浪费时间在上面了
  const [num, setNum] = useState(() => {
    let {x, y} = props,
      total = 0
    for (let i = x; i <= y; i++) {
      total += +String(Math.random()).substring(2)
    }

    return total
  })

  const handleClick = () => {
    setNum(1000)
  }

  return (
    <div>
      <p>{num}</p>
      <button onClick={handleClick}>
        genarete
      </button>
    </div>
  )
}

export default Demo
