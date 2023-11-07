import React from 'react'
import { observer, inject } from 'mobx-react'

const Task = props => {
  // 基于 props 属性获取 Store 实例
  const {task} = props
  console.log('task store', task)

  return (
    <div>Task</div>
  )
}

export default inject('task', 'person')(observer(Task))