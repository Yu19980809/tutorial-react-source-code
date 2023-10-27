import * as TYPES from '../actionTypes'

// 延迟函数：返回 promise 实例，在执行事件后，才会让实例状态变为成功
const delay = (interval = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), interval)
  })
}

const voteAction = {
  // redux-thunk 中间件的语法
  support() {
    return async dispatch => {
      await delay()
      dispatch({ type: TYPES.VOTE_SUP })
    }
  },
  // redux-promise 中间件的语法
  async oppose() {
    await delay()
    return {
      type: TYPES.VOTE_OPP
    }
  }
}

export default voteAction
