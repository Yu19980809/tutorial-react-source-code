import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react'
import store from './store'
import Task from './views/Task'

const root =ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // 基于 Provider 把各个版块的 Store 实例都放入到上下文中
  <Provider {...store} task={store.task} person={store.person}>
    <Task />
  </Provider>
)
