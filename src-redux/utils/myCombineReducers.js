const combineReducers = reducers => {
  const reducersKeys = Reflect.ownKeys(reducers)

  // 返回一个合并后的 reducer
  //  + 每一次 dispatch 派发，都是执行一次 reducer
  //  + state 就是 redux 容器中的公共状态
  //  + action 就是派发的时候传递的行为对象
  const combination = (state = {}, action) => {
    // 把 reducers 中的每一个 reducer 执行
    let nextState = []
    reducersKeys.forEach(key => {
      const reducer = reducers[key]
      nextState[key] = reducer(state[key], action)
    })

    return nextState
  }

  return combination
}

export default combineReducers
