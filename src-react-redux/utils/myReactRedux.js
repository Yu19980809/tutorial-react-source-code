import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { bindActionCreators } from 'redux'

const ThemeContext = createContext()

// Provider：把传递进来的 store 存放到根组件的上下文中
export const Provider = props => {
  const {store, children} = props

  return (
    <ThemeContext.Provider value={{ store }}>
      {children}
    </ThemeContext.Provider>
  )
}

// connect：获取上下文中的 store
// 然后把公共状态、要派发的方法都基于 props 属性传递给要渲染的组件
// 同时把让组件更新的方法放到事件池中
export const connect = (mapStateToProps, mapDispatchToProps) => {
  // 处理默认值
  if (!mapStateToProps) {
    mapStateToProps = () => {
      return {}
    }
  }

  if (!mapDispatchToProps) {
    mapDispatchToProps = dispatch => {
      return { dispatch }
    }
  }

  const currying = Component => {
    // Component 为最终要渲染的组件
    // HOC 是最后基于 export default 导出的组件
    const HOC = props => {
      // 需要获取上下文中的 store
      const {store} = useContext(ThemeContext)
      const {getState, dispatch, subscribe} = store

      // 向事件池中加入让组件更新的方法
      const [, forceUpdate] = useState(0)
      useEffect(() => {
        const unsubscribe = subscribe(() => {
          forceUpdate(+new Date())
        })

        return () => {
          // 在组件释放的时候执行:把放在事件池中的方法移除掉
          unsubscribe()
        }
      }, [])

      // 执行 mapSateToProps / mapDispatchToProps
      // 把执行的返回值（是一个函数）作为 props 属性传递给要渲染的组件（即 Component）
      const state = getState()
      const stateToProps = useMemo(() => {
        return mapStateToProps(state)
      }, [state])
      let dispatchToProps = {}
      if (typeof mapDispatchToProps === 'function') {
        // 是函数，直接执行
        dispatchToProps = mapDispatchToProps(dispatch)
      } else {
        // 是 actionCreator 对象，需要经过 bindActionCreators 处理
        dispatchToProps = bindActionCreators(mapDispatchToProps, dispatch)
      }

      return (
        <Component
          {...props}
          {...stateToProps}
          {...dispatchToProps}
        />
      )
    }

    return HOC
  }

  return currying
}
