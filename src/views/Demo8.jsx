import { useState, useMemo } from 'react'

const Demo = () => {
  const [supNum, setSupNum] = useState(10)
  const [oppNum, setOppNum] = useState(5)
  const [x, setX] = useState(0)

  // 将消耗性能或事件的计算操作使用 useMemo 缓存起来，设置依赖
  // 当非依赖的状态发生变化时，就不需要做这些耗时的操作了
  const ratio = useMemo(() => {
    console.log('useMemo')
    let total = supNum + oppNum
    let ratio = '--'
    if (total > 0) ratio = (supNum / total * 100).toFixed(2) + '%'
    return ratio
  }, [supNum, oppNum])

  return (
    <div>
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
      <p>支持比率：{ratio}</p>

      <div>
        <button onClick={() => setSupNum(supNum + 1)}>支持</button>
        <button onClick={() => setOppNum(oppNum + 1)}>反对</button>
        <button onClick={() => setX(x + 1)}>做点别的事</button>
      </div>
    </div>
  )
}

export default Demo
