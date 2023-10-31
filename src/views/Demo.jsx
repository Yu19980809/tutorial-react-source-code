import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTaskListAsync } from '../store/features/taskSlice'

const Demo = () => {
  // 获取公共状态和派发的方法
  const dispatch = useDispatch()
  const {taskList} = useSelector(state => state.task)

  // 需要的状态标识
  const [isLoading, setIsLoading] = useState(false)

  // 获取数据
  useEffect(() => {
    (async () => {
      if (taskList) return
      setIsLoading(true)
      await dispatch(getAllTaskListAsync())
      setIsLoading(false)
    })()
  }, [])

  return (
    <div>
      {isLoading ? 'Loading...' : 'Demo'}
    </div>
  )
}

export default Demo