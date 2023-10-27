// 实现 Redux 的部分源码

import { isPlainObject, randomString } from "."

export const createStore = reducer => {
  if (typeof reducer !== 'function') {
    throw new Error('Expected the root reducer to be a function')
  }

  let state // 存放公共状态
  let listeners = []  // 事件池

  // 获取公共状态的方法
  const getState = () => state

  // 向事件池中加入让组件更新的方法
  const subscribe = listener => {
    // 类型校验
    if (typeof listener !== 'function') {
      throw new TypeError('Expected the listener to be a function')
    }
    // 把传入的方法加入到事件池（需要做去重处理）
    if (!listeners.includes(listener)) listeners.push(listener)
    // 返回一个把方法从事件池中移除的函数
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  // 派发任务通知 reducer 执行
  const dispatch = action => {
    // 规则校验
    if (!isPlainObject(action)) {
      throw new TypeError('Actions must be plain objects')
    }

    if (typeof action.type === 'undefined') {
      throw new TypeError("Actions may not have an undefined 'type' property")
    }

    // 把 reducer 执行，传递两个值：公共状态、行为对象
    // 并接收返回值，替换公共状态
    state = reducer(state, action)

    // 当状态更改，还需要将事件池中的方法执行
    listeners.forEach(listener => listener())

    return action
  }

  // redux 内部会默认进行一次 dispatch 派发
  // 目的：给公共容器中的状态赋初始值
  // 注意：本地 dispatch 不能触发 reducer 中的任何逻辑，所以 type 的值要保证唯一
  // dispatch({type: Symbol()})
  dispatch({type: randomString()})

  // 返回创建的 store 对象
  return {
    getState,
    subscribe,
    dispatch
  }
}
