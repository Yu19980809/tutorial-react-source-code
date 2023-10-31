/* TASK 板块的切片,包含 REDUCER & ACTION CREATOR */
import { createSlice } from '@reduxjs/toolkit'
import * as api from '@/api'

const taskSlice = createSlice({
  // 设置切片的名称
  name: 'task',
  // 设置此切片对应 reducer 中的初始状态
  initialState: {
    taskList: null
  },
  // 编写不同业务逻辑下,对公共状态的更改
  reducers: {
    getAllTaskList(state, action) {
      // state: redux 中的公共信息(基于 immer 库管理,无需自己再克隆一份)
      // action: 派发的行为对象,我们无需考虑行为标识的问题
      state.taskList = action.payload
    },
    removeTask(state, { payload }) {
      let {taskList} = state
      if (!Array.isArray(taskList)) return
      state.taskList = taskList.filter(item => {
        // payload 接收的是要删除 task 的 ID
        return +item.id !== +payload
      })
    },
    updateTask(state, {payload}) {
      let {taskList} = state
      if (!Array.isArray(taskList)) return
      state.taskList = taskList.map(item => {
        if (+item.id === +payload) {
          item.state = 2
          item.complete = new Date().toLocaleString('zh-CN')
        }
        return item
      })
    }
  }
})

// 从切片中获取 actionCreator
// 此处解构的方法和上面 reducers 中的方法只是名称相同
// 执行这里解构的方法，返回的是需要派发的对象
export const {getAllTaskList, removeTask, updateTask} = taskSlice.actions
// console.log(getAllTaskList([])) // => {type: 'task/getAllTaskList', payload: []}

// 实现异步派发（基于 redux-thunk 中间件）
export const getAllTaskListAsync = () => {
  return async dispatch => {
    let list = []
    try {
      const result = await api.getTaskList(0)
      if (+result.code === 0) {
        list = result.list
      }
    } catch (error) {
      console.log('Failed to fetch task list', error)
    }
    dispatch(getAllTaskList(list))
  }
}

// 从切片中获取 reducer
export default taskSlice.reducer
