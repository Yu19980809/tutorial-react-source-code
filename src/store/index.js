import { configureStore } from '@reduxjs/toolkit'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import taskReducer from './features/taskSlice'

const store = configureStore({
  // 指定 reducer
  reducer: {
    // 按模块管理各个切片
    task: taskReducer
  },
  // 使用中间件 
  // 如果未指定任何中间件,则默认集成了 reduxThunk
  middleware: [reduxLogger, reduxThunk]
})

export default store