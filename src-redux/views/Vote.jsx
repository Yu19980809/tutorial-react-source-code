import React, { useContext, useState, useEffect } from 'react'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'
import themeContext from '../themeContext'

const Vote = () => {
  const {store} = useContext(themeContext)
  // 获取容器中的公共状态
  const {supNum, oppNum} = store.getState().vote

  // 组件第一次渲染完毕后，把让组件更新的方法放到 STORE 的事件池中
  // const [num, setNum] = useState(0)
  // const update = () => setNum(num + 1)
  // useEffect(() => {
  //   // const unsubscribe = store.subscribe(让组件更新的方法)
  //   //  + 把让组件更新的方法放在 STORE 的事件池中
  //   //  + 返回的 unsubscribe 方法，可以移除刚才放入到事件池中的方法
  //   const unsubscribe = store.subscribe(update)
  //   return () => unsubscribe()
  // }, [num])

  // 优化：还是在第一次渲染完毕后，往事件池中放入一个让组件更新的状态
  // 但是必须保证每次执行这个方法，修改的状态值都和之前不一样，这样就能够让函数组件更新
  // 所以可以使用时间戳
  const [_, setNum] = useState(0)
  useEffect(() => {
    store.subscribe(() => setNum(+new Date()))
  }, [])

  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">React is good</h2>
        <span className="num">{supNum + oppNum}</span>
      </div>

      <VoteMain />
      <VoteFooter />
    </div>
  )
}

export default Vote