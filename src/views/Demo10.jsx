import { useState } from 'react'

/**
 * 自定义Hook
 *  目的：提取封装一些公共的处理逻辑
 *  语法：创建一个函数，名字需要是 useXxx，后期直接在组件中调用
 */
const usePartialState = initialValue => {
  const [state, setState] = useState(initialValue)

  const setPartial = partialState => {
    setState({...state, ...partialState})
  }

  return [state, setPartial]
}

const Demo = () => {
  const [state, setPartial] = usePartialState({
    supNum: 10,
    oppNum: 5
  })

  const handleClick = type => {
    type === 'sup'
    ? setPartial({supNum: state.supNum + 1})
    : setPartial({oppNum: state.oppNum + 1})
  }

  return (
    <div>
      <p>支持人数：{state.supNum}</p>
      <p>反对人数：{state.oppNum}</p>

      <button onClick={handleClick.bind(null, 'sup')}>
        支持
      </button>
      <button onClick={handleClick.bind(null, 'opp')}>
        反对
      </button>
    </div>
  )
}

export default Demo
