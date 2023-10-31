import React from 'react'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'
// import { connect } from 'react-redux'
import { connect } from '@/utils/myReactRedux.js'

const Vote = ({ supNum, oppNum }) => {
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

export default connect(state => state.vote)(Vote)

/**
 * connect(mapStateToProps, mapDispatchToProps)(要渲染的组件)
 *  + mapStateToProps：可以获取到 redux 中的公共状态，把需要的信息作为 props 属性，传递给要渲染的组件
 *    ++ connect(state => {
 *        // state 存储的是 redux 容器中所有模块的公共状态
 *        // 返回的对象就是会传递给要渲染组件的 props 属性
 *        return {
 *          supNum: state.vote.supNum,
 *          info: state.person.info
 *        } 
 *       })(Vote)
 */
